import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, copyFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const output = path.join(root, "data/syllabus/processing/input");
const syllabusDir = path.join(root, "data/syllabus");

// Group assignments and course codes are taken from the downloaded KTU 2024 first-year syllabi.
// S1/S2 entries are kept in the source set with their official term label; this script does not
// guess which of those subjects a college schedules in S1.
const departments = [
  { id: "cse", name: "Computer Science and Engineering", group: "A", file: "ktu-btech-2024-first-year-group-a.txt", codes: ["GAMAT101", "GAPHT121", "GXCYT122", "GMEST103", "GXEST104", "UCEST105", "GXESL106", "UCPWT127", "UCHUT128"] },
  { id: "ece", name: "Electronics and Communication Engineering", group: "B", file: "ktu-btech-2024-first-year-group-b.txt", codes: ["GYMAT101", "GBPHT121", "GXCYT122", "GMEST103", "GXEST104", "UCEST105", "GXESL106", "UCHWT127", "UCHUT128"] },
  { id: "eee", name: "Electrical and Electronics Engineering", group: "B", file: "ktu-btech-2024-first-year-group-b.txt", codes: ["GYMAT101", "GBPHT121", "GXCYT122", "GMEST103", "GXEST104", "UCEST105", "GXESL106", "UCHWT127", "UCHUT128"] },
  { id: "civil", name: "Civil Engineering", group: "C", file: "ktu-btech-2024-first-year-s1-s2.txt", codes: ["GYMAT101", "GZPHT121", "GCCYT122", "GCEST103", "GCEST104", "UCEST105", "GCESL106", "UCHWT127", "UCHUT128"] },
  { id: "me", name: "Mechanical Engineering", group: "C", file: "ktu-btech-2024-first-year-s1-s2.txt", codes: ["GYMAT101", "GZPHT121", "GCCYT122", "GCEST103", "GCEST104", "UCEST105", "GCESL106", "UCHWT127", "UCHUT128"] },
];

const noteFiles = await walk(path.join(root, "src/features/notes"));
const markdownFiles = noteFiles.filter((file) => path.basename(file) === "notes.md");
const noteModules = await Promise.all(markdownFiles.map(async (file) => {
  const relative = path.relative(root, file);
  const text = await readFile(file, "utf8");
  return { relative, text, moduleId: path.basename(path.dirname(file)) };
}));

await mkdir(path.join(output, "syllabi"), { recursive: true });
await mkdir(path.join(output, "notes"), { recursive: true });
await mkdir(path.join(output, "assets"), { recursive: true });
const sourceFiles = [
  "ktu-btech-2024-first-year-group-a.pdf", "ktu-btech-2024-first-year-group-a.txt",
  "ktu-btech-2024-first-year-group-b.pdf", "ktu-btech-2024-first-year-group-b.txt",
  "ktu-btech-2024-first-year-s1-s2.pdf", "ktu-btech-2024-first-year-s1-s2.txt",
  "ktu-btech-curriculum-2024.pdf", "ktu-btech-curriculum-2024.txt",
];
for (const file of sourceFiles) await copyFile(path.join(syllabusDir, file), path.join(output, "syllabi", file));

const allRefs = new Map();
for (const module of noteModules) {
  const destination = path.join(output, "notes", module.moduleId, "notes.md");
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, module.text);
  for (const match of module.text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    const raw = match[1].trim().split(/\s+/)[0];
    if (raw.startsWith("http")) allRefs.set(raw, true);
    else if (raw.startsWith("/")) allRefs.set(raw, false);
  }
}

const imageManifest = [];
for (const [url, remote] of allRefs) {
  const ext = path.extname(new URL(url, "https://local.invalid").pathname) || ".bin";
  const filename = `${createHash("sha256").update(url).digest("hex")}${ext}`;
  const dest = path.join(output, "assets", filename);
  imageManifest.push({ url, remote, localFile: path.relative(output, dest), status: "pending" });
}
let imageCursor = 0;
let finishedImages = 0;
const workers = Array.from({ length: 3 }, async () => {
  while (imageCursor < imageManifest.length) {
    const item = imageManifest[imageCursor++];
    const dest = path.join(output, item.localFile);
    try { await stat(dest); item.status = "already-present"; continue; } catch { /* Download/copy below. */ }
    if (!item.remote) {
      const local = path.join(root, "public", item.url.slice(1));
      try { await stat(local); await copyFile(local, dest); item.status = "copied"; }
      catch { item.status = "missing-local"; }
      finishedImages++;
      if (finishedImages % 50 === 0) console.log(`prepared ${finishedImages}/${imageManifest.length} referenced images`);
      continue;
    }
    const mirroredPath = new URL(item.url).pathname;
    const mirroredLocal = path.join(root, "public", mirroredPath.slice(1));
    try {
      await stat(mirroredLocal);
      await copyFile(mirroredLocal, dest);
      item.status = "copied";
      item.localSource = path.relative(root, mirroredLocal);
      finishedImages++;
      if (finishedImages % 50 === 0) console.log(`prepared ${finishedImages}/${imageManifest.length} referenced images`);
      continue;
    } catch { /* No local mirror; try the remote URL below. */ }
    try {
      let response;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          response = await fetch(item.url, { signal: AbortSignal.timeout(15000) });
          if (response.ok) break;
          const status = response.status;
          await response.arrayBuffer(); // Drain error bodies so Undici can reuse the connection.
          if (status < 500 || attempt === 1) throw new Error(`HTTP ${status}`);
          response = undefined;
        } catch (error) { if (attempt === 1 || String(error).startsWith("Error: HTTP 4")) throw error; }
        if (attempt < 1) await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      if (!response?.ok) throw new Error(`HTTP ${response?.status || "failure"}`);
      await writeFile(dest, Buffer.from(await response.arrayBuffer()));
      item.status = "downloaded";
    } catch (error) {
      const message = String(error);
      item.status = message === "Error: HTTP 404" ? "missing-reference" : `failed: ${message.slice(0, 160)}`;
    }
    finishedImages++;
    if (finishedImages % 50 === 0) console.log(`prepared ${finishedImages}/${imageManifest.length} referenced images`);
  }
});
await Promise.all(workers);
await writeFile(path.join(output, "image-manifest.json"), JSON.stringify(imageManifest, null, 2) + "\n");

const syllabusText = new Map();
for (const department of departments) {
  if (!syllabusText.has(department.file)) syllabusText.set(department.file, await readFile(path.join(syllabusDir, department.file), "utf8"));
}
const courses = [];
const missing = [];
for (const department of departments) {
  const text = syllabusText.get(department.file);
  for (const code of department.codes) {
    const hits = [...text.matchAll(new RegExp(`Course Code\\s+${code}\\b`, "g"))];
    const occurrence = department.group === "C" ? 0 : 0;
    if (!hits[occurrence]) {
      missing.push({ department: department.id, code, source: department.file });
      continue;
    }
    const start = Math.max(0, text.lastIndexOf("SEMESTER", hits[occurrence].index));
    const after = text.slice(hits[occurrence].index + code.length);
    const next = after.search(/\n\s*Course Code\s+[A-Z]{2,6}\d{3}\b/);
    const end = next < 0 ? Math.min(text.length, hits[occurrence].index + 45000) : hits[occurrence].index + code.length + next;
    const section = text.slice(start, end).trim();
    const courseNotes = noteModules.filter((module) => noteFilesForCourse(department.group, code, module.moduleId, module.relative));
    courses.push({ department: department.id, departmentName: department.name, group: department.group, code, syllabusFile: department.file, syllabusExcerpt: section, notesModules: courseNotes.map(({ relative, moduleId, text: noteText }) => ({ moduleId, source: relative, text: noteText })) });
  }
}

const catalogState = {
  cse: ["GAMAT101", "GXCYT122", "GMEST103", "GXEST104", "UCEST105", "GAPHT121"],
  ece: ["GYMAT101", "GXCYT122", "GMEST103", "GXEST104", "GBPHT121", "UCEST105"],
  eee: ["GYMAT101", "GXCYT122", "GMEST103", "GXEST104", "GBPHT121", "UCEST105"],
  civil: ["GCCYT122", "UCEST105"],
  me: ["GCCYT122", "UCEST105"],
};
const notesSource = await readFile(path.join(root, "src/data/notes.ts"), "utf8");
const routesSource = await readFile(path.join(root, "src/pages/notes/ImportedModulePage.tsx"), "utf8");
const catalogChecks = {
  civilAndMechanicalGraphicsEntryIsBranchScopedAway: /\.\.\.\(branchId === "civil" \|\| branchId === "me" \? \[\] : \[\{\s*name: "Engineering Graphics"/.test(notesSource),
  civilAndMechanicalElectricalEntryIsBranchScopedAway: /\.\.\.\(branchId === "civil" \|\| branchId === "me" \? \[\] : \[\{\s*name: "Electrical and Electronics Engineering"/.test(notesSource),
  pythonModuleLinksAreSharedAcrossBranches: notesSource.includes('code: "UCEST105"') && /code: "UCEST105"[\s\S]{0,400}modules: \[\s*\{ name: "Module 1"/.test(notesSource),
  civilAndMechanicalPythonRoutesResolve: routesSource.includes('["ece", "eee", "civil", "me"]') && routesSource.includes('["python", ["module-1", "module-2", "module-3", "module-4", "question-papers"]]'),
};
if (Object.values(catalogChecks).some((passed) => !passed)) throw new Error(`A notes-catalogue verification check failed: ${JSON.stringify(catalogChecks)}`);
const subjectMap = departments.map((department) => ({
  ...department,
  officialSyllabusCodes: department.codes,
  currentlyListedInNotesCatalog: catalogState[department.id],
  catalogSource: "src/data/notes.ts (checked against source by this script)",
  syllabusCoursesFound: courses.filter((course) => course.department === department.id).map((course) => course.code),
  termAssignmentNeedsLocalScheduleCheck: courses.some((course) => course.department === department.id && /SEMESTER\s+(?:S1\/S2|1\s*\/\s*2)/i.test(course.syllabusExcerpt)),
}));

await writeFile(path.join(output, "syllabus-corpus.json"), JSON.stringify({ generatedAt: new Date().toISOString(), departments: subjectMap, courses, missing }, null, 2) + "\n");
await writeFile(path.join(output, "../s1-subject-verification.json"), JSON.stringify({ generatedAt: new Date().toISOString(), departments: subjectMap, catalogChecks, missing }, null, 2) + "\n");
console.log(JSON.stringify({ departments: departments.length, courses: courses.length, subjectCodes: new Set(courses.map((course) => course.code)).size, noteModules: noteModules.length, images: imageManifest.length, missing }, null, 2));

function noteFilesForCourse(group, code, moduleId, relative) {
  const modulesByCode = {
    GAMAT101: ["maths-module-1", "maths-module-2", "maths-module-3", "maths-module-4"],
    GYMAT101: ["electrical-maths-module-1", "electrical-maths-module-2", "electrical-maths-module-3", "electrical-maths-module-4"],
    GAPHT121: ["physics-module-1", "physics-module-2", "physics-module-3", "physics-module-4"],
    GBPHT121: ["physics-ece-module-1", "physics-ece-module-2", "physics-ece-module-3", "physics-ece-module-4"],
    GXCYT122: group === "A"
      ? ["chemistry-module-1", "chemistry-module-2", "chemistry-module-3", "chemistry-module-4"]
      : ["chemistry-ece-module-1", "chemistry-ece-module-2", "chemistry-ece-module-3", "chemistry-ece-module-4"],
    GCCYT122: ["chemistry-civil-mech-module-1", "chemistry-civil-mech-module-2", "chemistry-civil-mech-module-3", "chemistry-civil-mech-module-4"],
    GMEST103: ["graphics-m1", "graphics-m2", "graphics-m3", "graphics-m4"],
    GXEST104: ["electrical-module-1", "electrical-module-2", "electrical-module-3", "electrical-module-4"],
    UCEST105: ["python-module-1", "python-module-2", "python-module-3", "python-module-4"],
  };
  const allowed = modulesByCode[code] || [];
  return allowed.includes(moduleId) && path.basename(path.dirname(relative)) === moduleId;
}

async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(file));
    else result.push(file);
  }
  return result;
}

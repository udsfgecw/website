import { lazy } from "react";
import { useLocation } from "react-router-dom";
import ModuleNotesPage from "./ModuleNotesPage";
import NotFoundPage from "@/pages/NotFoundPage";

// Each route loads only its own Markdown; the catalogue imports lightweight paths.
const modules = {
  "/notes/cse/s1/maths/question-papers": lazy(async () => {
    const { gamat101QuestionPapers: notes } = await import("@/features/notes/question-papers");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/physics/question-papers": lazy(async () => {
    const { gapht121QuestionPapers: notes } = await import("@/features/notes/question-papers");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/graphics/question-papers": lazy(async () => {
    const { gmest103QuestionPapers: notes } = await import("@/features/notes/question-papers");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/electrical/question-papers": lazy(async () => {
    const { gxest104QuestionPapers: notes } = await import("@/features/notes/question-papers");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/python/question-papers": lazy(async () => {
    const { ucest105QuestionPapers: notes } = await import("@/features/notes/question-papers");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/chemistry/module-1": lazy(async () => {
    const { chemistrymodule1: notes } = await import("@/features/notes/chemistry-module-1");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/chemistry/module-2": lazy(async () => {
    const { chemistrymodule2: notes } = await import("@/features/notes/chemistry-module-2");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/chemistry/module-3": lazy(async () => {
    const { chemistrymodule3: notes } = await import("@/features/notes/chemistry-module-3");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/chemistry/module-4": lazy(async () => {
    const { chemistrymodule4: notes } = await import("@/features/notes/chemistry-module-4");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/electrical/module-1": lazy(async () => {
    const { electricalmodule1: notes } = await import("@/features/notes/electrical-module-1");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/electrical/module-2": lazy(async () => {
    const { electricalmodule2: notes } = await import("@/features/notes/electrical-module-2");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/electrical/module-3": lazy(async () => {
    const { electricalmodule3: notes } = await import("@/features/notes/electrical-module-3");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/graphics/m1": lazy(async () => {
    const { graphicsm1: notes } = await import("@/features/notes/graphics-m1");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/graphics/m2": lazy(async () => {
    const { graphicsm2: notes } = await import("@/features/notes/graphics-m2");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/graphics/m3": lazy(async () => {
    const { graphicsm3: notes } = await import("@/features/notes/graphics-m3");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/graphics/m4": lazy(async () => {
    const { graphicsm4: notes } = await import("@/features/notes/graphics-m4");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/python/module-1": lazy(async () => {
    const { pythonmodule1: notes } = await import("@/features/notes/python-module-1");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/python/module-2": lazy(async () => {
    const { pythonmodule2: notes } = await import("@/features/notes/python-module-2");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/python/module-3": lazy(async () => {
    const { pythonmodule3: notes } = await import("@/features/notes/python-module-3");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/cse/s1/python/module-4": lazy(async () => {
    const { pythonmodule4: notes } = await import("@/features/notes/python-module-4");
    return { default: () => <ModuleNotesPage notes={notes} /> };
  }),
  "/notes/ece/s1/maths/module-1": lazy(async () => {
    const { electricalMathsModule1 } = await import("@/features/notes/electrical-maths-module-1");
    return { default: () => <ModuleNotesPage notes={electricalMathsModule1("ece")} /> };
  }),
  "/notes/eee/s1/maths/module-1": lazy(async () => {
    const { electricalMathsModule1 } = await import("@/features/notes/electrical-maths-module-1");
    return { default: () => <ModuleNotesPage notes={electricalMathsModule1("eee")} /> };
  }),
  "/notes/ece/s1/chemistry/module-1": lazy(async () => {
    const { chemistryEceModule1 } = await import("@/features/notes/chemistry-ece-module-1");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule1("ece")} /> };
  }),
  "/notes/ece/s1/chemistry/module-2": lazy(async () => {
    const { chemistryEceModule2 } = await import("@/features/notes/chemistry-ece-module-2");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule2("ece")} /> };
  }),
  "/notes/ece/s1/chemistry/module-3": lazy(async () => {
    const { chemistryEceModule3 } = await import("@/features/notes/chemistry-ece-module-3");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule3("ece")} /> };
  }),
  "/notes/ece/s1/chemistry/module-4": lazy(async () => {
    const { chemistryEceModule4 } = await import("@/features/notes/chemistry-ece-module-4");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule4("ece")} /> };
  }),
  "/notes/eee/s1/chemistry/module-1": lazy(async () => {
    const { chemistryEceModule1 } = await import("@/features/notes/chemistry-ece-module-1");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule1("eee")} /> };
  }),
  "/notes/eee/s1/chemistry/module-2": lazy(async () => {
    const { chemistryEceModule2 } = await import("@/features/notes/chemistry-ece-module-2");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule2("eee")} /> };
  }),
  "/notes/eee/s1/chemistry/module-3": lazy(async () => {
    const { chemistryEceModule3 } = await import("@/features/notes/chemistry-ece-module-3");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule3("eee")} /> };
  }),
  "/notes/eee/s1/chemistry/module-4": lazy(async () => {
    const { chemistryEceModule4 } = await import("@/features/notes/chemistry-ece-module-4");
    return { default: () => <ModuleNotesPage notes={chemistryEceModule4("eee")} /> };
  }),
  "/notes/ece/s1/physics/module-1": lazy(async () => {
    const { physicseceModule1 } = await import("@/features/notes/physics-ece-module-1");
    return { default: () => <ModuleNotesPage notes={physicseceModule1("ece")} /> };
  }),
  "/notes/ece/s1/physics/module-2": lazy(async () => {
    const { physicseceModule2 } = await import("@/features/notes/physics-ece-module-2");
    return { default: () => <ModuleNotesPage notes={physicseceModule2("ece")} /> };
  }),
  "/notes/ece/s1/physics/module-3": lazy(async () => {
    const { physicseceModule3 } = await import("@/features/notes/physics-ece-module-3");
    return { default: () => <ModuleNotesPage notes={physicseceModule3("ece")} /> };
  }),
  "/notes/ece/s1/physics/module-4": lazy(async () => {
    const { physicseceModule4 } = await import("@/features/notes/physics-ece-module-4");
    return { default: () => <ModuleNotesPage notes={physicseceModule4("ece")} /> };
  }),
  "/notes/eee/s1/physics/module-1": lazy(async () => {
    const { physicseceModule1 } = await import("@/features/notes/physics-ece-module-1");
    return { default: () => <ModuleNotesPage notes={physicseceModule1("eee")} /> };
  }),
  "/notes/eee/s1/physics/module-2": lazy(async () => {
    const { physicseceModule2 } = await import("@/features/notes/physics-ece-module-2");
    return { default: () => <ModuleNotesPage notes={physicseceModule2("eee")} /> };
  }),
  "/notes/eee/s1/physics/module-3": lazy(async () => {
    const { physicseceModule3 } = await import("@/features/notes/physics-ece-module-3");
    return { default: () => <ModuleNotesPage notes={physicseceModule3("eee")} /> };
  }),
  "/notes/eee/s1/physics/module-4": lazy(async () => {
    const { physicseceModule4 } = await import("@/features/notes/physics-ece-module-4");
    return { default: () => <ModuleNotesPage notes={physicseceModule4("eee")} /> };
  }),
  "/notes/civil/s1/chemistry/module-1": lazy(async () => {
    const { chemistrycivilmechModule1 } = await import("@/features/notes/chemistry-civil-mech-module-1");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule1("civil")} /> };
  }),
  "/notes/civil/s1/chemistry/module-2": lazy(async () => {
    const { chemistrycivilmechModule2 } = await import("@/features/notes/chemistry-civil-mech-module-2");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule2("civil")} /> };
  }),
  "/notes/civil/s1/chemistry/module-3": lazy(async () => {
    const { chemistrycivilmechModule3 } = await import("@/features/notes/chemistry-civil-mech-module-3");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule3("civil")} /> };
  }),
  "/notes/civil/s1/chemistry/module-4": lazy(async () => {
    const { chemistrycivilmechModule4 } = await import("@/features/notes/chemistry-civil-mech-module-4");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule4("civil")} /> };
  }),
  "/notes/me/s1/chemistry/module-1": lazy(async () => {
    const { chemistrycivilmechModule1 } = await import("@/features/notes/chemistry-civil-mech-module-1");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule1("me")} /> };
  }),
  "/notes/me/s1/chemistry/module-2": lazy(async () => {
    const { chemistrycivilmechModule2 } = await import("@/features/notes/chemistry-civil-mech-module-2");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule2("me")} /> };
  }),
  "/notes/me/s1/chemistry/module-3": lazy(async () => {
    const { chemistrycivilmechModule3 } = await import("@/features/notes/chemistry-civil-mech-module-3");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule3("me")} /> };
  }),
  "/notes/me/s1/chemistry/module-4": lazy(async () => {
    const { chemistrycivilmechModule4 } = await import("@/features/notes/chemistry-civil-mech-module-4");
    return { default: () => <ModuleNotesPage notes={chemistrycivilmechModule4("me")} /> };
  }),
};

export default function ImportedModulePage() {
  const pathname = useLocation().pathname.replace(/\/$/, "");
  const basePath = pathname.replace(/\/[^/]+$/, "");
  const Module = modules[pathname as keyof typeof modules] ?? modules[basePath as keyof typeof modules];
  return Module ? <Module /> : <NotFoundPage />;
}

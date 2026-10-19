import { lazy } from "react";
import { useLocation } from "react-router-dom";
import ModuleNotesPage from "./ModuleNotesPage";
import NotFoundPage from "@/pages/NotFoundPage";

// Each route loads only its own Markdown; the catalogue imports lightweight paths.
const modules = {
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
};

export default function ImportedModulePage() {
  const pathname = useLocation().pathname.replace(/\/$/, "");
  const basePath = pathname.replace(/\/[^/]+$/, "");
  const Module = modules[pathname as keyof typeof modules] ?? modules[basePath as keyof typeof modules];
  return Module ? <Module /> : <NotFoundPage />;
}

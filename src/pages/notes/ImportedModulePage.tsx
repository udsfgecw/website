import { useLocation } from "react-router-dom";
import ModuleNotesPage from "./ModuleNotesPage";
import { chemistrymodule1 } from "@/features/notes/chemistry-module-1";
import { chemistrymodule2 } from "@/features/notes/chemistry-module-2";
import { chemistrymodule3 } from "@/features/notes/chemistry-module-3";
import { chemistrymodule4 } from "@/features/notes/chemistry-module-4";
import { electricalmodule1 } from "@/features/notes/electrical-module-1";
import { pythonmodule1 } from "@/features/notes/python-module-1";
import { pythonmodule2 } from "@/features/notes/python-module-2";
import { pythonmodule3 } from "@/features/notes/python-module-3";
import { pythonmodule4 } from "@/features/notes/python-module-4";
const modules = [chemistrymodule1, chemistrymodule2, chemistrymodule3, chemistrymodule4, electricalmodule1, pythonmodule1, pythonmodule2, pythonmodule3, pythonmodule4];
export default function ImportedModulePage() {
  const pathname = useLocation().pathname;
  const notes = modules.find((module) => module.basePath === pathname || pathname.startsWith(`${module.basePath}/`));
  return notes ? <ModuleNotesPage notes={notes} /> : null;
}

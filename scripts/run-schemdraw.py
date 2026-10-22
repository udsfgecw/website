#!/usr/bin/env python3
"""Runs model-written schemdraw code and saves the drawing as SVG.

    python3 -I scripts/run-schemdraw.py code.py out.svg

The code must create a schemdraw Drawing named `d`. Only schemdraw and math may be imported,
and file, process and introspection access is rejected before anything runs.
"""
import ast, math, re, sys

ALLOWED_IMPORTS = {"schemdraw", "math"}
BANNED_NAMES = {"open", "exec", "eval", "compile", "__import__", "input", "globals", "locals", "getattr", "setattr", "delattr", "vars", "breakpoint", "os", "sys", "subprocess"}


def check(tree):
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for a in node.names:
                if a.name.split(".")[0] not in ALLOWED_IMPORTS:
                    raise ValueError(f"import {a.name} not allowed")
        elif isinstance(node, ast.ImportFrom):
            if (node.module or "").split(".")[0] not in ALLOWED_IMPORTS:
                raise ValueError(f"import from {node.module} not allowed")
        elif isinstance(node, ast.Name) and node.id in BANNED_NAMES:
            raise ValueError(f"name {node.id} not allowed")
        elif isinstance(node, ast.Attribute) and node.attr.startswith("__"):
            raise ValueError(f"attribute {node.attr} not allowed")


SUBSCRIPT = re.compile(r"(?<![$\w])([A-Za-z]{1,3})_\{?([A-Za-z0-9]{1,4})\}?(?![$\w])")


def mathify(text):
    """Turns plain subscripts such as R_L or V_s into mathtext so they render as real subscripts."""
    if not isinstance(text, str):
        return text
    parts = text.split("$")
    # even-indexed parts are outside $...$ already
    for i in range(0, len(parts), 2):
        parts[i] = SUBSCRIPT.sub(lambda m: f"${m.group(1)}_{{{m.group(2)}}}$", parts[i])
    return "$".join(parts)


def patch_labels(elm):
    original = elm.Element.label

    def label(self, label, *args, **kwargs):
        if isinstance(label, (list, tuple)):
            label = [mathify(x) for x in label]
        else:
            label = mathify(label)
        return original(self, label, *args, **kwargs)

    elm.Element.label = label


def main():
    code = open(sys.argv[1]).read()
    check(ast.parse(code))
    import schemdraw
    import schemdraw.elements as elm
    schemdraw.use("matplotlib")  # the svg backend garbles subscripts
    import matplotlib
    matplotlib.rcParams["svg.fonttype"] = "path"
    matplotlib.rcParams["mathtext.fontset"] = "dejavusans"
    patch_labels(elm)
    env = {"schemdraw": schemdraw, "elm": elm, "math": math, "__name__": "figure"}
    exec(compile(code, "figure.py", "exec"), env)
    d = env.get("d")
    if d is None:
        raise ValueError("the code did not define a Drawing named d")
    d.save(sys.argv[2])


try:
    main()
except Exception as e:  # reported to the model so it can fix its code
    print(f"{type(e).__name__}: {e}", file=sys.stderr)
    sys.exit(1)

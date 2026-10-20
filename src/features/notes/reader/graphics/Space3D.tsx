import { useEffect, useRef, useState } from "react";
import type { LineProjection } from "./lineProjection";

/* The line AB in space with the HP and VP. The slider swings the HP down into the VP (the fold
   that turns the 3D picture into the 2D drawing). World axes: X along the XY line, Y up (= z, the
   height above the HP), Z toward the viewer (= y, the distance in front of the VP). */
export default function Space3D({ solved }: { solved: LineProjection }) {
  const host = useRef<HTMLDivElement>(null);
  const setFold = useRef<(degrees: number) => void>(() => {});
  const [fold, setFoldState] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    (async () => {
      const el = host.current;
      if (!el) return;
      const THREE = await import("three");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
      if (disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        setFailed(true);
        return;
      }
      const ink = getComputedStyle(el).color;
      const accent = getComputedStyle(el).getPropertyValue("--notes-accent").trim() || "#b4561f";
      const { A, B, HT, VT } = solved;

      const xs = [0, B.x, HT?.x ?? 0, VT?.x ?? 0];
      const ys = [A.y, B.y, HT?.y ?? 0, 0];
      const zs = [A.z, B.z, VT?.z ?? 0, 0];
      const margin = 14;
      const [x0, x1] = [Math.min(...xs) - margin, Math.max(...xs) + margin];
      const [y0, y1] = [Math.min(...ys) - margin, Math.max(...ys) + margin];
      const [z0, z1] = [Math.min(...zs) - margin, Math.max(...zs) + margin];

      const scene = new THREE.Scene();
      const size = Math.max(x1 - x0, y1 - y0, z1 - z0);
      const centre = new THREE.Vector3((x0 + x1) / 2, (z0 + z1) / 2, (y0 + y1) / 2);
      const camera = new THREE.PerspectiveCamera(38, 1, 1, size * 20);
      camera.position.set(centre.x + size * 0.95, centre.y + size * 0.85, centre.z + size * 1.7);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.copy(centre);
      controls.enableDamping = false;
      el.appendChild(renderer.domElement);
      renderer.domElement.style.display = "block";
      renderer.domElement.setAttribute("aria-label", "3D view of the line AB with the HP and VP. Drag to rotate.");

      const world = (p: { x: number; y: number; z: number }) => new THREE.Vector3(p.x, p.z, p.y);
      const material = (color: string, opacity = 1) =>
        new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, side: THREE.DoubleSide, depthWrite: opacity === 1 });
      const lineMat = (color: string, dashed = false) =>
        dashed ? new THREE.LineDashedMaterial({ color, dashSize: size / 60, gapSize: size / 90 }) : new THREE.LineBasicMaterial({ color });
      const dashedLine = (pts: [InstanceType<typeof THREE.Vector3>, InstanceType<typeof THREE.Vector3>], color: string) => {
        const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat(color, true));
        line.computeLineDistances();
        return line;
      };
      const rod = (p: InstanceType<typeof THREE.Vector3>, q: InstanceType<typeof THREE.Vector3>, r: number, color: string) => {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 1, 10), material(color));
        const dir = q.clone().sub(p);
        mesh.position.copy(p.clone().add(q).multiplyScalar(0.5));
        mesh.scale.y = dir.length();
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
        return mesh;
      };
      const label = (text: string, at: InstanceType<typeof THREE.Vector3>, color = ink) => {
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 128;
        const g = canvas.getContext("2d")!;
        g.font = "italic 600 72px Georgia, serif";
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.fillStyle = color;
        g.fillText(text, 64, 64);
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), depthTest: false, transparent: true }));
        sprite.scale.setScalar(size / 9);
        sprite.position.copy(at);
        sprite.renderOrder = 10;
        return sprite;
      };

      // the two reference planes: VP is the XY plane at Z = 0; HP lies in XZ and folds about the XY line
      const vp = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), material("#4f7fbf", 0.16));
      vp.position.set((x0 + x1) / 2, (z0 + z1) / 2, 0);
      scene.add(vp);
      const hpGroup = new THREE.Group();
      const hp = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, y1 - y0), material("#5aa66b", 0.16));
      hp.rotation.x = -Math.PI / 2;
      hp.position.set((x0 + x1) / 2, 0, (y0 + y1) / 2);
      hpGroup.add(hp);
      scene.add(hpGroup);
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x0, 0, 0), new THREE.Vector3(x1, 0, 0)]), lineMat(ink)));
      scene.add(label("x", new THREE.Vector3(x0, 0, 0).add(new THREE.Vector3(0, size / 20, 0))));
      scene.add(label("y", new THREE.Vector3(x1, 0, 0).add(new THREE.Vector3(0, size / 20, 0))));
      scene.add(label("VP", new THREE.Vector3(x0 + size / 14, z1 - size / 14, 0), "#4f7fbf"));
      const hpTag = label("HP", new THREE.Vector3(x0 + size / 14, 0, y1 - size / 14), "#3f8a52");
      hpGroup.add(hpTag);
      hpTag.position.set(x0 + size / 14, 0, y1 - size / 14);

      // the line and its two ends, in space
      const pA = world(A);
      const pB = world(B);
      scene.add(rod(pA, pB, size / 140, accent));
      for (const [p, name] of [[pA, "A"], [pB, "B"]] as const) {
        const ball = new THREE.Mesh(new THREE.SphereGeometry(size / 70, 16, 12), material(accent));
        ball.position.copy(p);
        scene.add(ball);
        scene.add(label(name, p.clone().add(new THREE.Vector3(0, size / 16, 0)), accent));
      }

      // front view (on the VP) and top view (on the HP, so it moves with the fold)
      const aF = new THREE.Vector3(A.x, A.z, 0);
      const bF = new THREE.Vector3(B.x, B.z, 0);
      const aT = new THREE.Vector3(A.x, 0, A.y);
      const bT = new THREE.Vector3(B.x, 0, B.y);
      scene.add(rod(aF, bF, size / 220, ink));
      scene.add(label("a′", aF.clone().add(new THREE.Vector3(-size / 22, size / 22, 0))));
      scene.add(label("b′", bF.clone().add(new THREE.Vector3(size / 22, size / 22, 0))));
      hpGroup.add(rod(aT, bT, size / 220, ink));
      hpGroup.add(label("a", aT.clone().add(new THREE.Vector3(-size / 22, 0, size / 22))));
      hpGroup.add(label("b", bT.clone().add(new THREE.Vector3(size / 22, 0, size / 22))));

      // projectors from A and B to their views; the ones to the HP follow its fold
      const toVp = [dashedLine([pA, aF], ink), dashedLine([pB, bF], ink)];
      toVp.forEach((l) => scene.add(l));
      const toHp = [dashedLine([pA, aT], ink), dashedLine([pB, bT], ink)];
      toHp.forEach((l) => scene.add(l));
      const ends = [pA, pB];
      const tops = [aT, bT];

      // traces: where the line meets the planes
      for (const [trace, name, onHp] of [[HT, "HT", true], [VT, "VT", false]] as const) {
        if (!trace) continue;
        const p = world(trace);
        const ball = new THREE.Mesh(new THREE.SphereGeometry(size / 90, 12, 10), material("#8a3ffc"));
        ball.position.copy(p);
        const tag = label(name, p.clone().add(new THREE.Vector3(0, size / 18, 0)), "#8a3ffc");
        if (onHp) {
          hpGroup.add(ball, tag);
        } else {
          scene.add(ball, tag);
        }
        scene.add(dashedLine([pA, p], "#8a3ffc"));
      }

      const resize = () => {
        const w = el.clientWidth || 600;
        const h = Math.round(Math.min(w * 0.72, 460));
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        render();
      };
      const render = () => renderer.render(scene, camera);
      const apply = (degrees: number) => {
        hpGroup.rotation.x = (degrees * Math.PI) / 180;
        hpGroup.updateMatrixWorld(true);
        toHp.forEach((line, i) => {
          const end = hpGroup.localToWorld(tops[i].clone());
          line.geometry.setFromPoints([ends[i], end]);
          line.computeLineDistances();
        });
        render();
      };
      setFold.current = apply;
      controls.addEventListener("change", render);
      const observer = new ResizeObserver(resize);
      observer.observe(el);
      resize();
      apply(0);

      cleanup = () => {
        observer.disconnect();
        controls.dispose();
        scene.traverse((o) => {
          const mesh = o as InstanceType<typeof THREE.Mesh>;
          mesh.geometry?.dispose?.();
          const m = mesh.material as InstanceType<typeof THREE.Material> | InstanceType<typeof THREE.Material>[] | undefined;
          (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => x.dispose());
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();
    return () => {
      disposed = true;
      cleanup();
    };
  }, [solved]);

  if (failed) return <p className="notes-epure-note">The 3D view needs WebGL, which this browser does not provide. The drawing tab shows the same line.</p>;
  return (
    <div className="notes-space3d">
      <div ref={host} className="notes-space3d-canvas" />
      <label className="notes-space3d-fold">
        <span>Fold the HP down into the VP</span>
        <input
          type="range"
          min={0}
          max={90}
          value={fold}
          onChange={(e) => {
            setFoldState(Number(e.target.value));
            setFold.current(Number(e.target.value));
          }}
        />
        <output>{fold}°</output>
      </label>
      <p className="notes-epure-note">Drag to rotate. Blue plane: VP. Green plane: HP. At 90° the top view lands below the XY line, which is the drawing you make on paper.</p>
    </div>
  );
}

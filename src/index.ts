import GUI from "lil-gui";
import * as THREE from "three";
import { Renderer } from "./lib/renderer";
import { Geometry } from "./lib/geometry";

const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
if (!canvas) {
  throw new Error("Canvas element not found");
}

const gui = new GUI();
const renderer = new Renderer(canvas);

const config = {
  wireframe: false,
};

const geometry = new Geometry({
  wireframe: config.wireframe,
  edgeCount: 4,
  rotation: new THREE.Euler(0, Math.PI / 4, 0),
});

renderer.scene.add(geometry.mesh);

gui.add(config, "wireframe").onChange((value: boolean) => {
  geometry.updateWireframe(value);
});

let startTime = Date.now() * 0.001;

// Animation loop
renderer.animate(() => {
  const base = Date.now() * 0.001;
  const elapsedTime = base - startTime;
  geometry.updateTime(elapsedTime);
  geometry.updateResolution(window.innerWidth, window.innerHeight);
});

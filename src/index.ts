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
  rotationSpeed: 0.5,
  position: new THREE.Vector3(0, 0, 0),
  color: new THREE.Color(0x00ff00),
  size: 10,
};

const geometry = new Geometry({
  wireframe: config.wireframe,
  color: config.color,
  position: config.position,
  edgeCount: 40,
  size: config.size,
});

renderer.scene.add(geometry.mesh);

gui.add(config, "wireframe").onChange((value: boolean) => {
  geometry.updateWireframe(value);
});

gui.add(config, "size", 1, 10, 0.1).onChange((value: number) => {
  geometry.updateSize(value);
});

gui.add(config, "rotationSpeed", 0, 4).onChange((value: number) => {
  config.rotationSpeed = value;
});

gui.addColor(config, "color").onChange((value: string) => {
  geometry.updateColor(new THREE.Color(value));
});

let startTime = Date.now() * 0.001;

renderer.animate(() => {
  const base = Date.now() * 0.001;
  const elapsedTime = base - startTime;

  geometry.updateTime(elapsedTime);
  // geometry.mesh.rotateY(config.rotationSpeed * 0.01);
});

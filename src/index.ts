import "../global.css";
import GUI from "lil-gui";
import * as THREE from "three";
import { Renderer } from "./lib/renderer";
import { Geometry } from "./lib/geometry";

const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
if (!canvas) {
  throw new Error("Canvas element not found");
}

const renderer = new Renderer(canvas);

const geometry = new Geometry({ wireframe: false, size: 6 });

renderer.scene.add(geometry.mesh);

renderer.animate(() => {
  const time = Date.now() * 0.0001;
  // cube.mesh.rotation.y = time * 30;
});

const gui = new GUI();

const config = {};

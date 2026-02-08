import "../global.css";
import { Cube } from "./lib/cube";
import { WebGLRenderer } from "./webgl/renderer";

const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
if (!canvas) {
  throw new Error("Canvas element not found");
}

const renderer = new WebGLRenderer(canvas);

const cube = new Cube({ size: 1, color: 0xffffff, wireframe: true });

renderer.scene.add(cube.getMesh());

renderer.animate(() => {
  const time = Date.now() * 0.0001;

  cube.getMesh().rotation.x = time;
  cube.getMesh().rotation.y = time;
});

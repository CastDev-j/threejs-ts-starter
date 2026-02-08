import * as THREE from "three";
import Stats from "stats.js";

export class WebGLRenderer {
  public scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private stats: Stats;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.stats = new Stats();
    this.stats.showPanel(0);
    this.stats.dom.style.position = "absolute";
    this.stats.dom.style.left = "0";
    this.stats.dom.style.top = "0";
    (canvas.parentElement ?? document.body).appendChild(this.stats.dom);

    window.addEventListener("resize", () => this.onWindowResize());
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  animate(callback: () => void): void {
    const loop = () => {
      this.stats.begin();
      callback();
      this.render();
      this.stats.end();
      requestAnimationFrame(loop);
    };
    loop();
  }

  clear(): void {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
  }

  private onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  dispose(): void {
    this.renderer.dispose();
    this.stats.dom.remove();
  }
}

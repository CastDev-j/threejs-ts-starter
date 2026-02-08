import * as THREE from "three";

interface CubeOptions {
  size?: number;
  color?: THREE.ColorRepresentation;
  wireframe?: boolean;
}

export class Cube {
  private mesh: THREE.Mesh;

  constructor({ size = 1, color = 0xffffff, wireframe = false }: CubeOptions) {
    const half = size / 2;
    const vertices = new Float32Array([
      -half,
      -half,
      -half,
      half,
      -half,
      -half,
      half,
      half,
      -half,
      -half,
      half,
      -half,
      -half,
      -half,
      half,
      half,
      -half,
      half,
      half,
      half,
      half,
      -half,
      half,
      half,
    ]);

    const indices = new Uint16Array([
      0, 1, 2, 0, 2, 3, 5, 4, 7, 5, 7, 6, 3, 2, 6, 3, 6, 7, 4, 5, 1, 4, 1, 0, 1,
      5, 6, 1, 6, 2, 4, 0, 3, 4, 3, 7,
    ]);

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

    geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    geometry.computeVertexNormals();

    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }
}

import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";

export default class RectangleMesh extends Mesh {
  constructor() {
    const geometry = new BoxGeometry();
    const material = new MeshPhongMaterial({
      toneMapped: false,
      transparent: true
    });
    super(geometry, material);
    this.castShadow = true;
    this.receiveShadow = true;
  }
};

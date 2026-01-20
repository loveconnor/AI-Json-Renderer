/// <reference types="@react-three/fiber" />

import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      mesh: any;
      meshStandardMaterial: any;
      group: any;
      sphereGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

export {};

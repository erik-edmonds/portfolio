import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Medical(props) {
  const { nodes, materials } = useGLTF("/models/medical.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.masks}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.masks}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.masks}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/medical.glb");
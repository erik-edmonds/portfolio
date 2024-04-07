import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Forest(props) {
  const { nodes, materials } = useGLTF("/models/forest.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Island1001.geometry}
        material={materials["Material.004"]}
        position={[1.808, 0, -1.875]}
      />
    </group>
  );
}

useGLTF.preload("/models/forest.glb");
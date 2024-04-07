import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function DecayedRobot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Decay/scene.gltf')
  const { actions } = useAnimations(animations, group)

  animations[0].name = "Animation";

  useEffect(() => {
    actions["Animation"]?.reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.179, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.089}>
          <group name="Root">
            <group name="Lamp" position={[4.076, 1.005, 5.904]} rotation={[-0.268, 0.602, 1.931]}>
              <group name="Lamp_1" />
            </group>
            <group name="Hemi" position={[12.622, 3.923, 11.405]}>
              <group name="Hemi_1" />
            </group>
            <group name="Cube001" position={[0.017, 0.505, 4.174]}>
              <mesh
                name="Cube001_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_0.geometry}
                material={materials.terreno}
              />
            </group>
            <group name="animacoes" position={[5.956, -2.616, 3.507]}>
              <group name="Armature" position={[-5.97, 2.263, -0.492]} rotation={[1.548, 0, 0]}>
                <primitive object={nodes.Armature_rootJoint} />
                <skinnedMesh
                  name="Plane_0"
                  geometry={nodes.Plane_0.geometry}
                  material={materials.robo}
                  skeleton={nodes.Plane_0.skeleton}
                />
                <skinnedMesh
                  name="Plane_1"
                  geometry={nodes.Plane_1.geometry}
                  material={materials.robo2}
                  skeleton={nodes.Plane_1.skeleton}
                />
                <group name="Plane" position={[0.014, -3.007, -0.421]} rotation={[-1.548, 0, 0]} />
              </group>
              <group name="Armature001" position={[-5.787, 0, 2.853]}>
                <primitive object={nodes.Armature001_rootJoint} />
                <skinnedMesh
                  name="Cube000_0"
                  geometry={nodes.Cube000_0.geometry}
                  material={materials.terreno}
                  skeleton={nodes.Cube000_0.skeleton}
                />
                <group name="Cube000" position={[-0.151, 3.122, -2.186]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Decay/scene.gltf')
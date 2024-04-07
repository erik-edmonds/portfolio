import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ConstructionBot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/construction_bot.glb')
  const { actions } = useAnimations(animations, group)

  animations[0].name = "Animation";

  useEffect(() => {
    actions["Animation"].reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="fbx_mergefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/construction_bot.glb')
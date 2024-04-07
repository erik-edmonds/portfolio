import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Spider(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/spider.glb')
  const { actions } = useAnimations(animations, group)

  animations[0].name = "Animation";

  useEffect(() => {
    actions["Animation"].reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="03e0980a1f7a4e0ea5aff14301247e60fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Empty"
                  position={[0.084, 63.256, 17.341]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={63.149}
                />
                <group
                  name="Armature002"
                  position={[1.529, 70.41, -4.649]}
                  rotation={[0.938, 0, 0]}
                  scale={63.149}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
                <group
                  name="Empty001"
                  position={[-75.546, 44.672, 57.545]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={63.149}
                />
                <group
                  name="Empty002"
                  position={[74.492, 37.109, 57.62]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={63.149}
                />
                <group
                  name="Empty003"
                  position={[-94.241, 46.506, -5.868]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={63.149}
                />
                <group
                  name="Empty004"
                  position={[93.83, 37.825, -5.868]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={63.149}
                />
                <group
                  name="Empty005"
                  position={[78.648, 39.587, -58.729]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={63.149}
                />
                <group
                  name="Empty006"
                  position={[-76.673, 47.02, -56.769]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={63.149}
                />
                <group name="Empty011" position={[0, 66.038, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/spider.glb')
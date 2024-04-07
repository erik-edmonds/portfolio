import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Heart(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/heart.glb')
  const { actions } = useAnimations(animations, group)

  animations[0].name = "Animation";

  useEffect(() => {
    actions["Animation"].reset().fadeIn(0.5).play();
  }, []);

  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cable_Mass_0"
                position={[0.005, 1.226, 0.289]}
                rotation={[-1.093, 0.04, -0.007]}
                scale={1.109}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Wire2}
                />
              </group>
              <group
                name="cable_1"
                position={[-0.803, 0.3, -0.066]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Wire4}
                />
              </group>
              <group
                name="Insulate_2"
                position={[-0.311, 1.324, 0.331]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Insulation}
                />
              </group>
              <group
                name="Insulate001_3"
                position={[-0.04, 1.475, 0.01]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Insulation}
                />
              </group>
              <group
                name="Insulate002_4"
                position={[0.04, 1.45, -0.013]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Insulation}
                />
              </group>
              <group
                name="Insulate003_5"
                position={[0.406, 1.254, 0.316]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Insulation}
                />
              </group>
              <group
                name="Cable_Mass001_14"
                position={[0.192, 0.305, 1.027]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Wire1}
                />
                <group
                  name="Cylinder_01_6"
                  position={[0.2, 0.24, -0.092]}
                  rotation={[1.571, -0.875, -1.57]}
                  scale={0.742}>
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.Shell}
                  />
                </group>
                <group
                  name="Cylinder_02_7"
                  position={[-0.272, 0.174, 0.229]}
                  rotation={[1.575, 1.425, 1.566]}
                  scale={0.742}>
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.Shell}
                  />
                </group>
                <group
                  name="Cylinder_03_8"
                  position={[0.201, 0.24, -0.246]}
                  rotation={[1.571, -0.875, -1.57]}
                  scale={0.742}>
                  <mesh
                    name="Object_22"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.Shell}
                  />
                </group>
                <group
                  name="Cylinder_04_9"
                  position={[-0.272, 0.174, -0.091]}
                  rotation={[1.566, 1.425, 1.576]}
                  scale={0.742}>
                  <mesh
                    name="Object_24"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.Shell}
                  />
                </group>
                <group
                  name="Cylinder_05_10"
                  position={[0.201, 0.24, 0.231]}
                  rotation={[1.57, -0.875, -1.572]}
                  scale={0.742}>
                  <mesh
                    name="Object_26"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials.Shell}
                  />
                </group>
                <group
                  name="Cylinder_06_11"
                  position={[-0.272, 0.174, 0.076]}
                  rotation={[1.575, 1.425, 1.566]}
                  scale={0.742}>
                  <mesh
                    name="Object_28"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials.Shell}
                  />
                </group>
                <group
                  name="Cylinder_07_12"
                  position={[0.2, 0.24, 0.077]}
                  rotation={[1.57, -0.875, -1.572]}
                  scale={0.742}>
                  <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.Shell}
                  />
                </group>
                <group
                  name="Cylinder_08_13"
                  position={[-0.272, 0.174, -0.244]}
                  rotation={[1.566, 1.425, 1.575]}
                  scale={0.742}>
                  <mesh
                    name="Object_32"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.Shell}
                  />
                </group>
              </group>
              <group name="cable001_15" position={[-4.565, 0.445, -3.055]}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Wire3}
                />
              </group>
              <group name="cable002_16" position={[3.401, 0.524, -4.564]}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Wire3}
                />
              </group>
              <group
                name="Shell_19"
                position={[-0.15, 0.868, 0.111]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Cylinder004_20"
                position={[-0.494, 0.416, 0.857]}
                rotation={[-1.093, 0.04, 3.032]}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Cylinder005_21"
                position={[0.633, 0.462, 0.67]}
                rotation={[-1.093, 0.04, -2.63]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Cylinder007_22"
                position={[-0.514, 0.377, 0.134]}
                rotation={[-1.093, 0.04, 1.596]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Cover_23"
                position={[-0.079, 0.254, -0.251]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Bolt001_24"
                position={[-0.029, 0.2, -0.264]}
                rotation={[-1.093, 0.04, -0.007]}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="TubingConnector_25"
                position={[-0.1, 1.11, -0.519]}
                rotation={[-1.093, 0.04, -0.242]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="InnerPipes_26"
                position={[-0.197, 0.696, 0.589]}
                rotation={[-1.072, -0.046, 0.645]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Bag_27"
                position={[-0.005, 0.012, -0.012]}
                rotation={[0.024, -0.004, -0.006]}>
                <mesh
                  name="mesh_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_25.geometry}
                  material={materials.material}
                  morphTargetDictionary={nodes.mesh_25.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_25.morphTargetInfluences}
                />
              </group>
              <group name="Reactor_28" position={[0.007, 1.18, 0.24]} rotation={[0.477, 0, -0.039]}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.Reactor}
                />
              </group>
              <group
                name="ReactorHolder_29"
                position={[0.004, 1.131, 0.216]}
                rotation={[0.477, -0.007, -0.04]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.Reactor}
                />
              </group>
              <group name="Table_30" position={[0.648, -0.101, -1.774]}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.Table}
                />
              </group>
              <group
                name="Cover001_31"
                position={[1.641, 0.067, 0.627]}
                rotation={[-1.571, 0, -0.088]}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Bolt002_32"
                position={[1.688, 0.027, 1.406]}
                rotation={[-3.026, -0.513, -1.184]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Bolt003_33"
                position={[1.344, 0.026, 1.359]}
                rotation={[-0.189, 0.95, -0.596]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Bolt004_34"
                position={[1.873, 0.027, 1.47]}
                rotation={[-0.102, -0.188, 2.182]}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="Bolt005_35"
                position={[1.98, 0.027, 1.468]}
                rotation={[-0.103, 0.079, -0.629]}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.Shell}
                />
              </group>
              <group
                name="MagStand_36"
                position={[0.599, 3.066, 0.884]}
                rotation={[-1.307, 0.133, 1.911]}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.MagnifyingGlassStand}
                />
              </group>
              <group
                name="MagStand2_37"
                position={[3.341, 2.166, -0.592]}
                rotation={[-Math.PI, 1.135, -Math.PI]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.MagnifyingGlassStand}
                />
              </group>
              <group
                name="MagStand3_38"
                position={[3.426, 2.964, -0.411]}
                rotation={[-Math.PI, 1.135, -Math.PI]}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.MagnifyingGlassStand}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/heart.glb')

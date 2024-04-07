import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Station(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/space_station.glb')
  const { actions } = useAnimations(animations, group)

  animations[0].name = "Rotation";
  useEffect(() => { actions["Rotation"].reset().fadeIn(0.5).play()}, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
          <group name="Root">
            <group
              name="Hemi002"
              position={[2700.763, -3884.813, 1409.344]}
              rotation={[0.741, -0.46, 0.096]}
              scale={11.575}>
              <group name="Hemi002_1" />
            </group>
            <group
              name="SF"
              position={[-326.601, -180.458, 71.818]}
              rotation={[0.829, -0.112, 1.452]}
              scale={0.5}>
              <mesh
                name="SF_0"
                castShadow
                receiveShadow
                geometry={nodes.SF_0.geometry}
                material={materials.Sartfighter}
              />
              <group name="Empty001" position={[3.236, 3.436, -0.128]}>
                <group name="SF002">
                  <mesh
                    name="SF002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF002_0.geometry}
                    material={materials.Star_Fighter_Fire}
                  />
                </group>
              </group>
              <group name="Empty002" position={[-5.764, 3.436, -0.128]}>
                <group name="SF004" position={[-0.171, 0, 0.002]} scale={0}>
                  <mesh
                    name="SF004_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF004_0.geometry}
                    material={materials.Starfighter_Laser}
                  />
                </group>
              </group>
              <group name="Empty003" position={[-5.801, -3.436, -0.129]}>
                <group name="SF003" position={[-0.133, 0, 0.002]} scale={0}>
                  <mesh
                    name="SF003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF003_0.geometry}
                    material={materials.Starfighter_Laser}
                  />
                </group>
              </group>
              <group name="Empty" position={[3.199, -3.436, -0.128]}>
                <group name="SF001">
                  <mesh
                    name="SF001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF001_0.geometry}
                    material={materials.Star_Fighter_Fire}
                  />
                </group>
              </group>
            </group>
            <group
              name="SF008"
              position={[136.677, 509.643, 10.76]}
              rotation={[0.009, 0.069, 1.582]}>
              <mesh
                name="SF008_0"
                castShadow
                receiveShadow
                geometry={nodes.SF008_0.geometry}
                material={materials.Sartfighter}
              />
              <group name="Empty004" position={[3.198, -3.436, -0.129]}>
                <group name="SF009">
                  <mesh
                    name="SF009_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF009_0.geometry}
                    material={materials.Star_Fighter_Fire}
                  />
                </group>
              </group>
              <group name="Empty005" position={[3.236, 3.436, -0.129]}>
                <group name="SF010">
                  <mesh
                    name="SF010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF010_0.geometry}
                    material={materials.Star_Fighter_Fire}
                  />
                </group>
              </group>
            </group>
            <group
              name="SF005"
              position={[-164.233, -468.852, 10.759]}
              rotation={[-0.009, -0.069, -1.559]}>
              <mesh
                name="SF005_0"
                castShadow
                receiveShadow
                geometry={nodes.SF005_0.geometry}
                material={materials.Sartfighter}
              />
              <group name="Empty006" position={[3.236, 3.436, -0.129]}>
                <group name="SF006">
                  <mesh
                    name="SF006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF006_0.geometry}
                    material={materials.Star_Fighter_Fire}
                  />
                </group>
              </group>
              <group name="Empty007" position={[3.199, -3.436, -0.129]}>
                <group name="SF007">
                  <mesh
                    name="SF007_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SF007_0.geometry}
                    material={materials.Star_Fighter_Fire}
                  />
                </group>
              </group>
            </group>
            <group name="Circle017" position={[83.672, 33.193, 0.089]} rotation={[0, 0, -0.696]}>
              <mesh
                name="Circle017_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle017_0.geometry}
                material={materials.material_15}
              />
            </group>
            <group name="Circle016" position={[56.482, 60.383, 0.089]}>
              <mesh
                name="Circle016_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle016_0.geometry}
                material={materials.material_15}
              />
            </group>
            <group name="Circle001">
              <mesh
                name="Circle001_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle001_0.geometry}
                material={materials.Material}
              />
            </group>
            <group name="Point" position={[0, 0, 19.113]}>
              <group name="Point_1" />
            </group>
            <group name="Hemi" position={[-1.763, 3.67, 22.944]} rotation={[0.534, -0.549, 0.148]}>
              <group name="Hemi_1" />
            </group>
            <group name="Circle004">
              <mesh
                name="Circle004_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle004_0.geometry}
                material={materials.material_13}
              />
            </group>
            <group name="Circle007" position={[0, 78.137, 0.059]}>
              <mesh
                name="Circle007_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle007_0.geometry}
                material={materials.door}
              />
              <group name="Circle009" position={[0, 1.079, 0.269]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="Circle009_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle009_0.geometry}
                  material={materials.door}
                />
              </group>
              <group name="Circle008" position={[0, -0.843, 0.269]}>
                <mesh
                  name="Circle008_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle008_0.geometry}
                  material={materials.door}
                />
              </group>
              <group name="Circle006" position={[0, 0, -10.541]}>
                <mesh
                  name="Circle006_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle006_0.geometry}
                  material={materials.door}
                />
              </group>
              <group name="Circle005" position={[0, 0, 7.31]}>
                <mesh
                  name="Circle005_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle005_0.geometry}
                  material={materials.door}
                />
              </group>
            </group>
            <group name="Circle018" rotation={[0, 0, -Math.PI]}>
              <mesh
                name="Circle018_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle018_0.geometry}
                material={materials.material_9}
              />
            </group>
            <group name="Circle021" rotation={[0, 0, -Math.PI]}>
              <mesh
                name="Circle021_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle021_0.geometry}
                material={materials['Material.007']}
              />
            </group>
            <group name="Circle023">
              <mesh
                name="Circle023_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle023_0.geometry}
                material={materials.Root}
              />
            </group>
            <group name="Sphere001" position={[0, 0, 1.365]}>
              <mesh
                name="Sphere001_0"
                castShadow
                receiveShadow
                geometry={nodes.Sphere001_0.geometry}
                material={materials['Material.011']}
              />
            </group>
            <group name="Torus004" position={[0, 0, 19.113]}>
              <mesh
                name="Torus004_0"
                castShadow
                receiveShadow
                geometry={nodes.Torus004_0.geometry}
                material={materials['Material.014']}
              />
              <mesh
                name="Torus004_1"
                castShadow
                receiveShadow
                geometry={nodes.Torus004_1.geometry}
                material={materials.material}
              />
              <group name="Torus000" rotation={[-Math.PI, 1.396, -Math.PI]} scale={1.007}>
                <mesh
                  name="Torus000_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus000_0.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  name="Torus000_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus000_1.geometry}
                  material={materials.material}
                />
                <group name="Torus001" rotation={[-Math.PI, 1.396, -Math.PI]} scale={1.011}>
                  <mesh
                    name="Torus001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus001_0.geometry}
                    material={materials['Material.014']}
                  />
                  <mesh
                    name="Torus001_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus001_1.geometry}
                    material={materials.material}
                  />
                  <group name="Torus002" rotation={[Math.PI, 1.396, -Math.PI]} scale={1.009}>
                    <mesh
                      name="Torus002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Torus002_0.geometry}
                      material={materials['Material.014']}
                    />
                    <mesh
                      name="Torus002_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Torus002_1.geometry}
                      material={materials.material}
                    />
                    <group name="Torus003" rotation={[-Math.PI, 1.396, -Math.PI]} scale={1.012}>
                      <mesh
                        name="Torus003_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus003_0.geometry}
                        material={materials['Material.014']}
                      />
                      <mesh
                        name="Torus003_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus003_1.geometry}
                        material={materials.material}
                      />
                      <group name="Torus021" rotation={[-Math.PI, 1.396, -Math.PI]} scale={1.023}>
                        <mesh
                          name="Torus021_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Torus021_0.geometry}
                          material={materials['Material.014']}
                        />
                        <mesh
                          name="Torus021_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.Torus021_1.geometry}
                          material={materials.material}
                        />
                        <group name="Torus022" rotation={[-Math.PI, 1.396, -Math.PI]} scale={1.011}>
                          <mesh
                            name="Torus022_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Torus022_0.geometry}
                            material={materials['Material.014']}
                          />
                          <mesh
                            name="Torus022_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Torus022_1.geometry}
                            material={materials.material}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Circle024" rotation={[0, 0, -Math.PI]}>
              <mesh
                name="Circle024_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle024_0.geometry}
                material={materials.material_9}
              />
            </group>
            <group name="Circle025" position={[0, 0, 38.866]} rotation={[Math.PI, 0, -Math.PI]}>
              <mesh
                name="Circle025_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle025_0.geometry}
                material={materials.material_9}
              />
            </group>
            <group name="Circle010" position={[0, -78.137, 0.059]} rotation={[0, 0, -Math.PI]}>
              <mesh
                name="Circle010_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle010_0.geometry}
                material={materials.door}
              />
              <group name="Circle027" position={[0, 0, 7.31]}>
                <mesh
                  name="Circle027_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle027_0.geometry}
                  material={materials.door}
                />
              </group>
              <group name="Circle026" position={[0, 0, -10.541]}>
                <mesh
                  name="Circle026_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle026_0.geometry}
                  material={materials.door}
                />
              </group>
              <group name="Circle012" position={[0, -0.843, 0.269]}>
                <mesh
                  name="Circle012_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle012_0.geometry}
                  material={materials.door}
                />
              </group>
              <group name="Circle011" position={[0, 1.079, 0.269]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="Circle011_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle011_0.geometry}
                  material={materials.door}
                />
              </group>
            </group>
            <group name="Cube002" position={[-6.273, -198.587, 6.361]}>
              <mesh
                name="Cube002_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_0.geometry}
                material={materials.material}
              />
              <group name="Torus006">
                <mesh
                  name="Torus006_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus006_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus005" scale={1.602}>
                  <mesh
                    name="Torus005_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus005_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Cube003" position={[-12.908, 195.289, 7.823]}>
              <mesh
                name="Cube003_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube003_0.geometry}
                material={materials.material}
              />
              <group name="Torus007">
                <mesh
                  name="Torus007_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus007_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus008" scale={1.602}>
                  <mesh
                    name="Torus008_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus008_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Cube004" position={[10.331, -153.78, 1.861]}>
              <mesh
                name="Cube004_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube004_0.geometry}
                material={materials.material}
              />
              <group name="Torus009">
                <mesh
                  name="Torus009_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus009_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus010" scale={1.602}>
                  <mesh
                    name="Torus010_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus010_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Cube005" position={[11.202, 195.027, 9.845]}>
              <mesh
                name="Cube005_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube005_0.geometry}
                material={materials.material}
              />
              <group name="Torus011">
                <mesh
                  name="Torus011_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus011_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus012" scale={1.602}>
                  <mesh
                    name="Torus012_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus012_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Cube006" position={[3.88, -182.278, 12.477]}>
              <mesh
                name="Cube006_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube006_0.geometry}
                material={materials.material}
              />
              <group name="Torus013">
                <mesh
                  name="Torus013_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus013_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus014" scale={1.602}>
                  <mesh
                    name="Torus014_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus014_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Cube007" position={[3.384, 195.027, 10.425]}>
              <mesh
                name="Cube007_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube007_0.geometry}
                material={materials.material}
              />
              <group name="Torus015">
                <mesh
                  name="Torus015_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus015_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus016" scale={1.602}>
                  <mesh
                    name="Torus016_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus016_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Cube008" position={[-5.611, -152.982, 10.173]}>
              <mesh
                name="Cube008_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube008_0.geometry}
                material={materials.material}
              />
              <group name="Torus017">
                <mesh
                  name="Torus017_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus017_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus018" scale={1.602}>
                  <mesh
                    name="Torus018_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus018_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Cube009" position={[-6.273, 195.114, 11.427]}>
              <mesh
                name="Cube009_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube009_0.geometry}
                material={materials.material}
              />
              <group name="Torus019">
                <mesh
                  name="Torus019_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus019_0.geometry}
                  material={materials.Drohn_1}
                />
                <group name="Torus020" scale={1.602}>
                  <mesh
                    name="Torus020_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus020_0.geometry}
                    material={materials.Drohn_1}
                  />
                </group>
              </group>
            </group>
            <group name="Circle028" position={[152.059, 162.39, -68.129]} rotation={[0, 0, -0.611]}>
              <mesh
                name="Circle028_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle028_0.geometry}
                material={materials['UVMap.001']}
              />
              <group name="Circle029" position={[0, 0, 45.056]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="Circle029_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle029_0.geometry}
                  material={materials['UVMap.001']}
                />
                <group name="Circle030" position={[-0.738, 0, 8.588]}>
                  <mesh
                    name="Circle030_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle030_0.geometry}
                    material={materials['UVMap.001']}
                  />
                  <group name="Cube024" position={[-6.407, 4.456, 6.656]}>
                    <mesh
                      name="Cube024_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube024_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube025" scale={0}>
                      <mesh
                        name="Cube025_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube025_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube022" position={[-6.407, -4.544, 6.656]}>
                    <mesh
                      name="Cube022_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube022_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube023" scale={0}>
                      <mesh
                        name="Cube023_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube023_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube020" position={[-6.407, -4.544, -0.344]}>
                    <mesh
                      name="Cube020_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube020_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube021" scale={0}>
                      <mesh
                        name="Cube021_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube021_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube018" position={[-6.407, 4.456, -0.344]}>
                    <mesh
                      name="Cube018_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube018_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube019" scale={0}>
                      <mesh
                        name="Cube019_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="Hemi001"
              position={[2700.763, -3884.813, 1409.344]}
              rotation={[0.741, -0.46, 0.096]}
              scale={11.575}>
              <group name="Hemi001_1" />
            </group>
            <group
              name="Circle002"
              position={[-157.941, -157.61, -68.129]}
              rotation={[0, 0, -Math.PI]}>
              <mesh
                name="Circle002_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle002_0.geometry}
                material={materials['UVMap.001']}
              />
              <group name="Circle003" position={[0, 0, 45.056]} rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="Circle003_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle003_0.geometry}
                  material={materials['UVMap.001']}
                />
                <group name="Circle013" position={[-0.738, 0, 8.588]}>
                  <mesh
                    name="Circle013_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle013_0.geometry}
                    material={materials['UVMap.001']}
                  />
                  <group name="Cube035" position={[-6.407, 4.456, -0.344]}>
                    <mesh
                      name="Cube035_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube035_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube036" scale={0}>
                      <mesh
                        name="Cube036_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube036_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube033" position={[-6.407, -4.544, -0.344]}>
                    <mesh
                      name="Cube033_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube033_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube034" scale={0}>
                      <mesh
                        name="Cube034_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube034_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube031" position={[-6.407, -4.544, 6.656]}>
                    <mesh
                      name="Cube031_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube031_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube032" scale={0}>
                      <mesh
                        name="Cube032_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube032_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube000" position={[-6.407, 4.456, 6.656]}>
                    <mesh
                      name="Cube000_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube000_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube001" scale={0}>
                      <mesh
                        name="Cube001_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="Circle"
              position={[23.991, 0, 2.025]}
              rotation={[0, 0, -0.178]}
              scale={0.8}>
              <mesh
                name="Circle_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle_0.geometry}
                material={materials['Material.003']}
              />
              <mesh
                name="Circle_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle_1.geometry}
                material={materials['Material.004']}
              />
              <group
                name="Circle020"
                position={[2.1, 0.156, 6.593]}
                rotation={[-Math.PI / 2, 1.393, Math.PI / 2]}
                scale={1.113}>
                <mesh
                  name="Circle020_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle020_0.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Under_Attack"
                position={[2.304, 0.193, 6.593]}
                rotation={[-Math.PI / 2, 1.48, -Math.PI]}
                scale={[1.193, 1.056, 0.617]}>
                <mesh
                  name="Under_Attack_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Under_Attack_0.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Station"
                position={[2.003, 0.139, 6.593]}
                rotation={[-Math.PI / 2, 1.48, -Math.PI]}
                scale={[1.529, 1.127, 0.643]}>
                <mesh
                  name="Station_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Station_0.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Warning"
                position={[1.994, 0.137, 6.593]}
                rotation={[-Math.PI / 2, 1.48, -Math.PI]}
                scale={[1.843, 1.515, 0.945]}>
                <mesh
                  name="Warning_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Warning_0.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Text003"
                position={[2.016, 0.141, 6.593]}
                rotation={[-Math.PI / 2, 1.48, -Math.PI]}
                scale={[5.023, 3.771, 2.872]}>
                <mesh
                  name="Text003_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Text003_0.geometry}
                  material={materials.material}
                />
              </group>
            </group>
            <group name="Circle014" position={[-157.941, 142.39, -68.129]} rotation={[0, 0, -1.92]}>
              <mesh
                name="Circle014_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle014_0.geometry}
                material={materials['UVMap.001']}
              />
              <group name="Circle015" position={[0, 0, 45.056]} rotation={[0, 0, 2.837]}>
                <mesh
                  name="Circle015_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle015_0.geometry}
                  material={materials['UVMap.001']}
                />
                <group name="Circle019" position={[-0.738, 0, 8.588]}>
                  <mesh
                    name="Circle019_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle019_0.geometry}
                    material={materials['UVMap.001']}
                  />
                  <group name="Cube026" position={[-6.407, 4.456, 6.656]}>
                    <mesh
                      name="Cube026_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube026_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube027" scale={0}>
                      <mesh
                        name="Cube027_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube016" position={[-6.407, -4.544, 6.656]}>
                    <mesh
                      name="Cube016_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube016_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube017" scale={0}>
                      <mesh
                        name="Cube017_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube012" position={[-6.407, -4.544, -0.344]}>
                    <mesh
                      name="Cube012_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube012_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube014" scale={0}>
                      <mesh
                        name="Cube014_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube010" position={[-6.407, 4.456, -0.344]}>
                    <mesh
                      name="Cube010_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube010_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube011" scale={0}>
                      <mesh
                        name="Cube011_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube011_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="Circle022"
              position={[113.181, -181.225, -68.129]}
              rotation={[0, 0, 1.474]}>
              <mesh
                name="Circle022_0"
                castShadow
                receiveShadow
                geometry={nodes.Circle022_0.geometry}
                material={materials['UVMap.001']}
              />
              <group name="Circle031" position={[0, 0, 45.056]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Circle031_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle031_0.geometry}
                  material={materials['UVMap.001']}
                />
                <group name="Circle032" position={[-0.738, 0, 8.588]} rotation={[0, 0.15, 0]}>
                  <mesh
                    name="Circle032_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle032_0.geometry}
                    material={materials['UVMap.001']}
                  />
                  <group name="Cube040" position={[-6.407, 4.456, -0.344]}>
                    <mesh
                      name="Cube040_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube040_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube041" scale={0}>
                      <mesh
                        name="Cube041_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube041_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube038" position={[-6.407, -4.544, -0.344]}>
                    <mesh
                      name="Cube038_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube038_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube039" scale={0}>
                      <mesh
                        name="Cube039_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube039_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube030" position={[-6.407, -4.544, 6.656]}>
                    <mesh
                      name="Cube030_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube030_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube037" scale={0}>
                      <mesh
                        name="Cube037_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube037_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                  <group name="Cube028" position={[-6.407, 4.456, 6.656]}>
                    <mesh
                      name="Cube028_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube028_0.geometry}
                      material={materials['UVMap.001']}
                    />
                    <group name="Cube029" scale={0}>
                      <mesh
                        name="Cube029_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube029_0.geometry}
                        material={materials.material}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Cube" position={[0, 0, 19.113]}>
              <mesh
                name="Cube_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube_0.geometry}
                material={materials['Material.001']}
              />
              <mesh
                name="Cube_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube_1.geometry}
                material={materials['Material.002']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/space_station.glb')

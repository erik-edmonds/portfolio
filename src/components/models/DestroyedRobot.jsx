import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DestroyedRobot(props) {
  const { nodes, materials } = useGLTF('/models/destroyed_robot.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[12.713, -2.952, -3.768]}
        rotation={[-1.365, 0.43, 2.371]}
        scale={[-0.152, 0.2, 0.225]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_128.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_129.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group
        position={[6.073, -2.099, -3.736]}
        rotation={[-0.112, -0.344, -0.295]}
        scale={[0.43, 0.472, 0.433]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_211.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_212.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_213.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_214.geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.007']}
        position={[10.595, -5.289, -5.976]}
        rotation={[-0.292, -0.255, 0.981]}
        scale={[-0.074, 0.076, 0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.007']}
        position={[8.64, -5.261, -6.154]}
        rotation={[-2.008, -0.13, 1.434]}
        scale={[-0.374, 1.592, 0.374]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.007']}
        position={[8.169, -5.835, -5.887]}
        rotation={[-0.423, -0.143, 1.716]}
        scale={[-0.039, 0.03, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.007']}
        position={[8.257, -5.818, -5.881]}
        rotation={[-0.423, -0.143, 1.716]}
        scale={[-0.039, 0.03, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Material.007']}
        position={[8.345, -5.8, -5.873]}
        rotation={[-0.423, -0.143, 1.716]}
        scale={[-0.039, 0.03, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['Material.007']}
        position={[8.443, -5.782, -5.866]}
        rotation={[-0.423, -0.143, 1.716]}
        scale={[-0.039, 0.03, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['Material.007']}
        position={[7.956, -5.664, -6.728]}
        rotation={[1.186, 0.178, 1.646]}
        scale={[-0.038, 0.03, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['Material.007']}
        position={[8.044, -5.647, -6.727]}
        rotation={[1.186, 0.178, 1.646]}
        scale={[-0.038, 0.03, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['Material.007']}
        position={[8.133, -5.631, -6.725]}
        rotation={[1.186, 0.178, 1.646]}
        scale={[-0.038, 0.03, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['Material.007']}
        position={[8.231, -5.613, -6.723]}
        rotation={[1.186, 0.178, 1.646]}
        scale={[-0.038, 0.03, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['Material.007']}
        position={[9.87, -4.751, -5.936]}
        rotation={[1.313, 0.06, 1.665]}
        scale={[-0.098, 0.101, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['Material.007']}
        position={[9.907, -4.849, -6.225]}
        rotation={[1.313, 0.06, 1.665]}
        scale={[-0.098, 0.101, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['Material.007']}
        position={[10.846, -4.636, -5.402]}
        rotation={[-1.284, -0.701, 1.397]}
        scale={[-0.31, 0.234, 0.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['Material.007']}
        position={[11.455, -4.264, -5.466]}
        rotation={[-2.684, 0.077, 0.789]}
        scale={[-0.22, 0.959, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['Material.007']}
        position={[11.559, -4.238, -5.077]}
        rotation={[-0.716, -0.798, 1.796]}
        scale={[-0.027, 0.021, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials['Material.007']}
        position={[11.602, -4.197, -5.053]}
        rotation={[-0.716, -0.798, 1.796]}
        scale={[-0.027, 0.021, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials['Material.007']}
        position={[11.644, -4.157, -5.029]}
        rotation={[-0.716, -0.798, 1.796]}
        scale={[-0.027, 0.021, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials['Material.007']}
        position={[11.691, -4.112, -5.002]}
        rotation={[-0.716, -0.798, 1.796]}
        scale={[-0.027, 0.021, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['Material.007']}
        position={[8.683, -5.686, -5.924]}
        rotation={[-1.804, -0.164, 1.458]}
        scale={[-0.023, 0.07, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials['Material.007']}
        position={[8.699, -5.716, -6.062]}
        rotation={[-1.804, -0.164, 1.458]}
        scale={[-0.023, 0.07, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials['Material.007']}
        position={[12.63, -3.013, -4.67]}
        rotation={[-2.544, 0.685, 2.81]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials['Material.007']}
        position={[12.564, -3.089, -4.722]}
        rotation={[-2.567, 0.463, 3.046]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials['Material.007']}
        position={[8.617, -5.058, -5.61]}
        rotation={[-1.788, -0.156, 3.079]}
        scale={[-1.231, 0.77, 0.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials['Material.007']}
        position={[8.039, -5.841, -5.838]}
        rotation={[-0.305, -0.123, -2.956]}
        scale={[-0.917, 0.769, 0.769]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials['Material.007']}
        position={[8.359, -5.736, -5.917]}
        rotation={[0.473, 1.152, 1.508]}
        scale={[-0.754, 0.209, 0.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials['Material.007']}
        position={[9.197, -5.547, -5.963]}
        rotation={[-0.21, -0.106, -2.89]}
        scale={[-0.676, 0.771, 0.758]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials['Material.007']}
        position={[7.842, -5.726, -6.73]}
        rotation={[1.306, 0.182, -3.055]}
        scale={[-0.917, 0.765, 0.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials['Material.007']}
        position={[7.609, -5.733, -6.807]}
        rotation={[1.339, 0.179, -3.056]}
        scale={[-0.754, 0.208, 0.468]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_60.geometry}
        material={materials['Material.007']}
        position={[9.105, -5.328, -6.478]}
        rotation={[-1.579, 0.712, -0.377]}
        scale={[-0.71, 0.526, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_62.geometry}
        material={materials['Material.007']}
        position={[7.167, -5.334, -6.131]}
        rotation={[-1.333, 1.252, 0.784]}
        scale={[-0.449, 0.487, 0.54]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_64.geometry}
        material={materials['Material.007']}
        position={[10.361, -5.071, -5.924]}
        rotation={[0.968, 0.59, -1.381]}
        scale={[-0.362, 0.469, 0.469]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials['Material.007']}
        position={[10.249, -5.228, -6.215]}
        rotation={[-1.911, -0.001, 3.047]}
        scale={[-0.151, 0.151, 0.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_68.geometry}
        material={materials['Material.007']}
        position={[10.675, -5.2, -6.163]}
        rotation={[1.105, 0.119, 0.045]}
        scale={[-0.151, 0.151, 0.151]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_70.geometry}
        material={materials['Material.007']}
        position={[11.123, -4.127, -5.526]}
        rotation={[-0.12, -0.549, 0.385]}
        scale={[-0.085, 0.062, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_72.geometry}
        material={materials['Material.007']}
        position={[11.576, -4.49, -5.57]}
        rotation={[-3.007, 0.437, -0.942]}
        scale={[-0.085, 0.061, 0.036]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials['Material.007']}
        position={[11.484, -4.288, -5.089]}
        rotation={[-0.555, -0.769, -2.77]}
        scale={[-0.646, 0.539, 0.402]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_76.geometry}
        material={materials['Material.007']}
        position={[11.412, -4.435, -5.143]}
        rotation={[-0.511, -0.762, -2.735]}
        scale={[-0.531, 0.147, 0.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_78.geometry}
        material={materials['Material.007']}
        position={[11.062, -4.788, -5.441]}
        rotation={[-1.039, 0.687, 0.106]}
        scale={[-0.429, 0.429, 0.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_80.geometry}
        material={materials['Material.007']}
        position={[13.661, -2.407, -4.046]}
        rotation={[-2.611, 0.699, 2.831]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_82.geometry}
        material={materials['Material.007']}
        position={[12.076, -3.595, -5.021]}
        rotation={[1.517, 0.731, 0.508]}
        scale={[0.201, 0.261, 0.261]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_84.geometry}
        material={materials['Material.007']}
        position={[12.228, -3.48, -4.966]}
        rotation={[-2.249, 0.222, 2.22]}
        scale={[-0.175, 0.23, 0.259]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_86.geometry}
        material={materials['Material.007']}
        position={[12.363, -3.341, -4.9]}
        rotation={[-2.381, 0.558, 2.832]}
        scale={[-0.129, 0.17, 0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_88.geometry}
        material={materials['Material.007']}
        position={[14.303, -1.818, -3.595]}
        rotation={[-2.189, 0.519, 2.214]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_90.geometry}
        material={materials['Material.007']}
        position={[14.507, -1.98, -3.836]}
        rotation={[-2.167, 0.438, 2.31]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_92.geometry}
        material={materials['Material.007']}
        position={[14.371, -2.179, -4.31]}
        rotation={[-3.071, 0.751, -2.602]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_94.geometry}
        material={materials['Material.007']}
        position={[14.012, -1.968, -3.568]}
        rotation={[-2.358, 0.482, 2.557]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_96.geometry}
        material={materials['Material.007']}
        position={[13.212, -2.902, -3.417]}
        rotation={[2.844, 0.757, -2.925]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_98.geometry}
        material={materials['Material.007']}
        position={[13.858, -1.949, -3.583]}
        rotation={[-2.358, 0.482, 2.557]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_100.geometry}
        material={materials['Material.007']}
        position={[14.041, -1.809, -3.677]}
        rotation={[-2.202, 0.304, 1.853]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_102.geometry}
        material={materials['Material.007']}
        position={[14.304, -1.977, -3.896]}
        rotation={[-2.193, 0.327, 2.162]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_104.geometry}
        material={materials['Material.007']}
        position={[14.211, -2.111, -4.347]}
        rotation={[-2.72, 0.688, -3.067]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_106.geometry}
        material={materials['Material.007']}
        position={[12.924, -2.943, -3.665]}
        rotation={[-2.679, 1.318, 2.956]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_108.geometry}
        material={materials['Material.007']}
        position={[13.108, -2.891, -3.474]}
        rotation={[2.812, 0.708, -2.888]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_110.geometry}
        material={materials['Material.007']}
        position={[12.766, -2.883, -4.035]}
        rotation={[-2.692, 0.734, -3.094]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_112.geometry}
        material={materials['Material.007']}
        position={[13.632, -2.194, -4.001]}
        rotation={[-2.327, 0.461, 2.379]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_114.geometry}
        material={materials['Material.007']}
        position={[13.49, -2.099, -3.715]}
        rotation={[-2.358, 0.482, 2.557]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_116.geometry}
        material={materials['Material.007']}
        position={[13.782, -2.111, -4.136]}
        rotation={[-2.222, 0.519, 2.485]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_118.geometry}
        material={materials['Material.007']}
        position={[13.802, -2.084, -4.465]}
        rotation={[-2.629, 0.704, 2.776]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_120.geometry}
        material={materials['Material.007']}
        position={[14.3, -1.975, -3.917]}
        rotation={[-2.091, 0.43, 2.405]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_122.geometry}
        material={materials['Material.007']}
        position={[14.149, -1.781, -3.629]}
        rotation={[-2.116, 0.432, 2.011]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_124.geometry}
        material={materials['Material.007']}
        position={[14.283, -2.144, -4.328]}
        rotation={[-2.919, 0.711, -2.618]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_126.geometry}
        material={materials['Material.007']}
        position={[14.218, -1.798, -3.61]}
        rotation={[-2.464, 0.727, 2.853]}
        scale={[-0.152, 0.2, 0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_131.geometry}
        material={materials['Material.007']}
        position={[12.889, -2.794, -3.981]}
        rotation={[-2.659, 0.698, 3.001]}
        scale={[-0.146, 0.204, 0.173]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_133.geometry}
        material={materials.material_0}
        position={[9.852, -4.903, -6.246]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_135.geometry}
        material={materials.material_0}
        position={[8.644, -4.885, -5.961]}
        rotation={[-1.802, -0.155, 1.464]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_137.geometry}
        material={materials['Material.007']}
        position={[8.669, -4.973, -6.192]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_139.geometry}
        material={materials.material_0}
        position={[8.653, -4.939, -6.037]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_141.geometry}
        material={materials['Material.007']}
        position={[8.672, -4.979, -6.217]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_143.geometry}
        material={materials.material_0}
        position={[8.691, -4.788, -6.532]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_145.geometry}
        material={materials.material_0}
        position={[8.697, -4.629, -6.117]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_147.geometry}
        material={materials['Material.007']}
        position={[10.102, -4.395, -5.3]}
        rotation={[-0.644, 0.747, 0.037]}
        scale={[-0.57, 0.57, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_149.geometry}
        material={materials.material_0}
        position={[9.977, -5.082, -5.658]}
        rotation={[-0.644, 0.747, 0.037]}
        scale={[-0.57, 0.57, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_151.geometry}
        material={materials.material_0}
        position={[10.122, -4.379, -5.297]}
        rotation={[-0.644, 0.747, 0.037]}
        scale={[-0.57, 0.57, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_153.geometry}
        material={materials['Material.007']}
        position={[7.43, -5.812, -5.693]}
        rotation={[-2.684, -0.823, -0.083]}
        scale={[-0.538, 0.538, 0.538]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_155.geometry}
        material={materials['Material.007']}
        position={[7.176, -5.815, -5.741]}
        rotation={[1.448, -0.111, -2.715]}
        scale={[-0.538, 0.538, 0.538]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_157.geometry}
        material={materials['Material.007']}
        position={[6.532, -4.605, -3.892]}
        rotation={[-0.054, -0.047, -0.978]}
        scale={[0.081, 0.111, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_159.geometry}
        material={materials['Material.007']}
        position={[6.463, -4.508, -5.624]}
        rotation={[-0.054, -0.047, -0.978]}
        scale={[0.081, 0.111, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_161.geometry}
        material={materials['Material.007']}
        position={[6.524, -4.593, -3.474]}
        rotation={[-0.054, -0.047, -0.978]}
        scale={[0.081, 0.111, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_163.geometry}
        material={materials['Material.007']}
        position={[6.472, -4.516, -1.721]}
        rotation={[-0.054, -0.047, -0.978]}
        scale={[0.081, 0.111, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_165.geometry}
        material={materials['Material.007']}
        position={[5.634, -3.979, -3.692]}
        scale={[0.547, 2.042, 0.547]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_167.geometry}
        material={materials['Material.007']}
        position={[7.258, -5.743, -5.63]}
        rotation={[-0.298, -0.214, 0.385]}
        scale={[-0.05, 0.052, 0.015]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_169.geometry}
        material={materials['Material.007']}
        position={[7.199, -5.538, -5.68]}
        rotation={[-0.256, -0.091, 0.367]}
        scale={[-0.05, 0.052, 0.015]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_171.geometry}
        material={materials['Material.007']}
        position={[7.044, -6.746, -3.609]}
        scale={[0.763, 0.763, 0.676]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_173.geometry}
        material={materials['Material.007']}
        position={[6.543, -4.61, -4.197]}
        rotation={[0, 0, 0.594]}
        scale={[0.534, 0.278, 0.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_175.geometry}
        material={materials['Material.007']}
        position={[6.225, -6.601, -3.641]}
        scale={[1.093, 1.185, 0.97]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_177.geometry}
        material={materials['Material.007']}
        position={[5.893, -6.029, -5.016]}
        rotation={[0, -0.452, 0]}
        scale={[0.059, 0.57, 0.882]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_179.geometry}
        material={materials['Material.007']}
        position={[5.584, -5.835, -3.676]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.192, 0.719, 0.231]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_181.geometry}
        material={materials['Material.007']}
        position={[5.867, -5.831, -3.668]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.067, 0.424, 0.328]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_183.geometry}
        material={materials['Material.007']}
        position={[6.319, -6.962, -4.625]}
        rotation={[-0.583, 0, 0]}
        scale={[0.472, 0.967, 0.923]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_185.geometry}
        material={materials['Material.007']}
        position={[5.872, -4.784, -4.338]}
        rotation={[-3.099, 0.354, 0.047]}
        scale={[-0.048, 0.46, 0.705]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_187.geometry}
        material={materials['Material.007']}
        position={[5.925, -4.547, -4.2]}
        rotation={[0.184, 0.2, -0.726]}
        scale={[0.068, 0.275, 0.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_189.geometry}
        material={materials['Material.007']}
        position={[5.948, -4.528, -3.183]}
        rotation={[-0.202, -0.219, -0.727]}
        scale={[0.068, 0.275, 0.352]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_191.geometry}
        material={materials['Material.007']}
        position={[6.384, -5.572, -5.042]}
        rotation={[-0.952, -0.426, -0.106]}
        scale={[0.137, 0.174, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_193.geometry}
        material={materials['Material.007']}
        position={[6.384, -6.144, -5.042]}
        rotation={[-0.793, -0.437, -0.095]}
        scale={[0.136, 0.256, 0.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_195.geometry}
        material={materials['Material.007']}
        position={[5.612, -7.271, -3.523]}
        rotation={[-0.057, -0.464, 0.173]}
        scale={[0.087, 0.194, 0.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_197.geometry}
        material={materials['Material.007']}
        position={[5.521, -3.649, -3.71]}
        rotation={[0.018, -0.359, 0.085]}
        scale={[0.076, 0.352, 0.075]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_199.geometry}
        material={materials['Material.007']}
        position={[6.013, -3.593, -3.661]}
        rotation={[-0.26, -0.092, -1.181]}
        scale={[0.046, 0.105, 0.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_201.geometry}
        material={materials['Material.007']}
        position={[5.947, -3.218, -3.659]}
        rotation={[-0.215, -0.225, -0.942]}
        scale={[0.046, 0.105, 0.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_203.geometry}
        material={materials['Material.007']}
        position={[5.906, -2.778, -3.69]}
        rotation={[-0.249, -0.159, -1.102]}
        scale={[0.046, 0.105, 0.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_205.geometry}
        material={materials['Material.007']}
        position={[5.579, -4.282, -3.906]}
        rotation={[-1.48, 0.591, -0.142]}
        scale={[0.022, 0.03, 0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_207.geometry}
        material={materials['Material.007']}
        position={[5.579, -4.61, -3.906]}
        rotation={[-1.48, 0.591, -0.142]}
        scale={[0.022, 0.03, 0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_209.geometry}
        material={materials['Material.007']}
        position={[5.579, -4.892, -3.906]}
        rotation={[-1.48, 0.591, -0.142]}
        scale={[0.022, 0.03, 0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_216.geometry}
        material={materials['Material.007']}
        position={[5.766, -2.045, -3.855]}
        rotation={[-0.112, -0.344, -0.295]}
        scale={[0.43, 0.472, 0.433]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_218.geometry}
        material={materials['Material.007']}
        position={[6.274, -4.314, -3.661]}
        rotation={[-0.021, -0.008, -1.16]}
        scale={[0.613, 0.962, 0.887]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_220.geometry}
        material={materials['Material.007']}
        position={[6.294, -5.378, -5.854]}
        rotation={[2.222, 0.322, -1.799]}
        scale={[-0.583, 0.757, 0.757]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_222.geometry}
        material={materials['Material.007']}
        position={[6.277, -6.91, -2.44]}
        rotation={[0.572, 0.339, -1.526]}
        scale={[0.963, 0.966, 0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_224.geometry}
        material={materials['Material.007']}
        position={[5.825, -5.975, -4.137]}
        rotation={[-0.045, -0.327, 1.527]}
        scale={[-0.225, 0.222, 0.264]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_226.geometry}
        material={materials['Material.007']}
        position={[6.277, -6.91, -4.842]}
        rotation={[-0.275, 0.339, -1.526]}
        scale={[0.989, 0.961, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_228.geometry}
        material={materials['Material.007']}
        position={[6.345, -7.687, -4.358]}
        rotation={[1.676, -0.314, -1.363]}
        scale={[0.226, 0.221, 0.228]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_230.geometry}
        material={materials['Material.007']}
        position={[6.864, -2.213, -3.438]}
        rotation={[1.522, 0.109, -0.771]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_232.geometry}
        material={materials['Material.007']}
        position={[6.864, -2.213, -3.438]}
        rotation={[1.522, 0.109, -0.771]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_234.geometry}
        material={materials['Material.007']}
        position={[7.475, -5.813, -3.969]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_236.geometry}
        material={materials['Material.007']}
        position={[7.453, -5.812, -3.222]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_238.geometry}
        material={materials['Material.007']}
        position={[7.438, -6.402, -3.961]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_240.geometry}
        material={materials['Material.007']}
        position={[7.412, -6.395, -3.243]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_242.geometry}
        material={materials['Material.007']}
        position={[7.391, -6.931, -3.96]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_244.geometry}
        material={materials['Material.007']}
        position={[7.391, -6.94, -3.273]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_246.geometry}
        material={materials['Material.007']}
        position={[7.391, -7.47, -3.31]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_248.geometry}
        material={materials['Material.007']}
        position={[7.391, -7.479, -3.923]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_250.geometry}
        material={materials['Material.007']}
        position={[7.475, -5.813, -3.969]}
        rotation={[2.082, 0.092, -0.663]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_252.geometry}
        material={materials['Material.007']}
        position={[6.833, -4.453, -2.664]}
        rotation={[0.019, 0.073, -0.007]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_254.geometry}
        material={materials['Material.007']}
        position={[6.779, -4.479, -4.526]}
        rotation={[-0.165, -0.002, 0.085]}
        scale={[0.083, 0.039, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_256.geometry}
        material={materials['Material.007']}
        position={[5.565, -6.405, -3.051]}
        rotation={[-1.818, 1.364, 1.564]}
        scale={[-0.895, 0.994, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_258.geometry}
        material={materials['Material.007']}
        position={[3.971, -2.558, -3.584]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_260.geometry}
        material={materials['Material.007']}
        position={[3.84, -2.51, -3.364]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_262.geometry}
        material={materials['Material.007']}
        position={[3.849, -2.515, -3.24]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_264.geometry}
        material={materials.material_0}
        position={[4.151, -2.845, -3.675]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_266.geometry}
        material={materials['Material.007']}
        position={[3.193, -2.687, -4.409]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_268.geometry}
        material={materials.material_0}
        position={[4.77, -5.112, -3.163]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_270.geometry}
        material={materials.material_0}
        position={[4.771, -5.22, -2.335]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_272.geometry}
        material={materials.material_0}
        position={[4.75, -4.801, -2.143]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_274.geometry}
        material={materials.material_0}
        position={[4.688, -4.795, -1.622]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_276.geometry}
        material={materials['Material.007']}
        position={[3.047, -3.573, -2.324]}
        rotation={[-1.091, -0.187, 1.59]}
        scale={[-0.917, 0.917, 0.917]}
      />
    </group>
  )
}

useGLTF.preload('/models/destroyed_robot.glb')
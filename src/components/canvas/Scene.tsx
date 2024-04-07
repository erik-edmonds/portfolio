'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import * as THREE from 'three'
import { clippingEvents } from "@coconut-xr/koestlich";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <>
      <Canvas {...props}
        events={clippingEvents} gl={{ localClippingEnabled: true }}
        raycaster={{ params: { Points: { threshold: 0.2 } } }}
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
        shadows>
        {/* @ts-ignore */}
        <r3f.Out />
        <Preload all />
      </Canvas>
    </>
  )
}

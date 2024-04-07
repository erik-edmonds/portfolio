'use client'

import dynamic from 'next/dynamic';
import { Suspense, useMemo } from 'react';
import NavigationLayout from '@/components/canvas/VirtualNavigation';
import { MeshReflectorMaterial } from '@react-three/drei';
import { Station } from '@/components/models/Station';

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='m-0 flex size-full flex-col flex-wrap items-center md:flex-row'>
          <View orbit className='m-0 flex size-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Station scale={35} position={[6,-2,0]} rotation={[0, -Math.PI/2, 0]}/>
              <group position={[3.5,0.3,2.5]} rotation={[0, Math.PI/3.2, 0]}>
                <NavigationLayout />
              </group>
              <Common color={'#191920'} position={[7, 1, 6]} fov={60}/>
              <group position={[0, -1.7, -10]}>
                <mesh rotation={[-Math.PI / 2 , 0, 0]}>
                <planeGeometry args={[100, 100]} />
                  <MeshReflectorMaterial
                    blur={[0, 0]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={100}
                    mirror={1}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#050505"
                    metalness={0.3}/>
                </mesh>
              </group>
            </Suspense>
          </View>
        </div>
    </>
  )
}

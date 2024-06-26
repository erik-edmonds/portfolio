'use client'

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Cat } from '@/components/models/CatAnime';
import { Mushroom } from '@/components/models/Mushroom';
import { MeshReflectorMaterial } from '@react-three/drei';

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
});

//Add section with interesting research papers, using react pdf
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {

  return (
    <div className="m-0 bg-gradient-to-b from-indigo-200">
      <div className='m-0 flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-full'>
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
            <h1 className='my-4 text-5xl font-bold leading-tight'>Erik Edmonds</h1>
            <p className='mb-8 text-2xl leading-normal text-gray-500'>
              About Me
            </p>
        </div>

        <div className='h-screen text-center md:w-3/5'>
          <View className='flex h-screen w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Mushroom scale={5} position={[4, -3, -38]} rotation={[0, Math.PI / 4, 0]}/>
              <Cat scale={0.4} position={[-4, -4, -20]} rotation={[0.0, 0.1, 0]} />
              <Common color={'#191920'} position={[0, 0, 5]}/>
              <fog attach="fog" args={['#50509b', 0, 85]} />
              <group position={[0, -4.5, -10]}>
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
                    color="#202345"
                    metalness={0.3}/>
                </mesh>
              </group>
            </Suspense>
          </View>
        </div>
      </div>
    </div>
  )
}

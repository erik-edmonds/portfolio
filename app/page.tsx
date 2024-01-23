'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {CameraShake} from "@react-three/drei";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false });
const Model = dynamic(() => import('@/templates/models/Models').then((mod) => mod.Model), { ssr: false });

import { ExpandableCard, BaseView } from "@/components/canvas/View";
import { ProjectSection } from "@/templates/ProjectSection";
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  // @ts-ignore
    return (
        // TODO: Dropdown filter
        <Parallax pages={4} className="bg-purple-wave bg-no-repeat bg-cover">
            <ParallaxLayer>
                <div>
                    <div className='mx-auto flex w-screen h-screen flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
                        {/* jumbo */}
                        <div className='flex w-full h-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
                            <p className='w-full uppercase'>Erik Edmonds</p>
                            <h1 className='my-4 text-5xl font-bold leading-tight'>My Portfolio</h1>
                            <p className='mb-8 text-2xl leading-normal'>Portfolio of personal projects</p>
                        </div>

                        {/* TODO: Pass class name as a prop to ComponentView */}
                        <div className='w-full h-full text-center md:w-3/5'>
                            <BaseView className='flex w-full h-full flex-col items-center justify-center'>
                                <Suspense fallback={null}>
                                    <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
                                    <Common />
                                </Suspense>
                            </BaseView>
                        </div>
                    </div>

                    {/* First Section*/}
                    <ProjectSection />
                </div>
            </ParallaxLayer>
        </Parallax>
    )
}

'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {CameraShake} from "@react-three/drei";


const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false });
const Model = dynamic(() => import('@/templates/models/Models').then((mod) => mod.Model), { ssr: false });

import {Popup, BaseView, Expansion, VRef as View} from "@/components/canvas/View";
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  // @ts-ignore
    return (
        // TODO: Dropdown filter
        <>
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
            <div className='mx-auto my-0 flex w-full flex-col flex-wrap items-center p-0 md:flex-row machine-learning lg:w-4/5'>
                <div className='flex w-screen flex-col p-0 text-center md:w-full md:text-center'>
                    <h1 className='my-0 text-5xl font-bold leading-normal'>Machine Learning</h1>
                </div>
                <div className='mx-auto my-0 flex w-full flex-col flex-wrap items-center p-0 md:flex-row machine-learning lg:w-4/5'>
                    <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
                        <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>3D Gaussian Splatting</h2>
                        <p className='mb-8 text-gray-600'>Creation of 3D models from pictures using 3D Gaussian Splatting,</p>
                        <p className='mb-8 text-gray-600'>TODO: Add the spiderverse model</p>
                    </div>
                    <Popup classes={'relative my-12 lg:h-full w-full animate-bounce py-0 sm:w-1/2 md:mb-40'}>
                        <Model path={'/assets/duck.glb'} spin={true} scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                        <Common color={'rgba(244, 244, 247, 0.2)'} /> {/* color lightpink */}
                    </Popup>
                </div>
                {/* Second Row*/}
                <Popup classes={'relative my-12 lg:h-full w-full py-0 sm:w-1/2 md:mb-40'}>
                    <Model path={'/assets/dog.glb'} spin={false} scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                    <Common color={'rgba(244, 244, 247, 0.2)'} />
                </Popup>
                <div className='w-full p-6 sm:w-1/2'>
                    <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Stable Diffusion</h2>
                    <p className='mb-8 text-gray-600'>Creation of 3D models from pictures using 3D Gaussian Splatting,</p>
                    <p className='mb-8 text-gray-600'>TODO: Add the spiderverse model</p>
                </div>

                {/* Third Row*/}
                <div className='relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40'>
                    <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Lyft</h2>
                    <p className='mb-8 text-gray-600'>Creation of 3D models from pictures using 3D Gaussian Splatting,</p>
                    <p className='mb-8 text-gray-600'>TODO: Add the spiderverse model</p>
                </div>
                <Popup classes={'relative my-12 lg:h-full w-full py-0 sm:w-1/2 md:mb-40'}>
                    <Model path={'/assets/dog.glb'} spin={false} scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                    <Common color={'rgba(244, 244, 247, 0.2)'} />
                </Popup>

                {/* Fourth Row*/}
                <Popup classes={'relative my-12 lg:h-full w-full py-0 sm:w-1/2 md:mb-40'}>
                    <Model path={'/assets/dog.glb'} spin={false} scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                    <Common color={'rgba(244, 244, 247, 0.2)'} />
                </Popup>
                <div className='w-full p-6 sm:w-1/2'>
                    <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>NeRF</h2>
                    <p className='mb-8 text-gray-600'>Creation of 3D models from pictures using 3D Gaussian Splatting,</p>
                    <p className='mb-8 text-gray-600'>TODO: Add the spiderverse model</p>
                </div>
            </div>
            
            {/* Second Section */}
            <div className='mx-auto flex w-full flex-col flex-wrap items-center p-6 md:flex-row  lg:w-4/5'>
                <div className='flex w-screen flex-col p-0 text-center md:w-full md:text-center'>
                    <h1 className='my-0 text-5xl font-bold leading-normal'>Visualization</h1>
                </div>
                {/* First Row */}
                <Popup classes={'relative my-12 lg:h-full w-full animate-bounce py-0 sm:w-1/2 md:mb-40'}>
                    <Model path={'/assets/duck.glb'}  route='/blob' scale={2} position={[0, -1.6, 0]} />
                    <Common color={'rgba(244, 244, 247, 0.2)'} /> {/* rgba(252, 252, 222, 0.1): Yellow */}
                </Popup>
                <div className='w-full p-6 sm:w-1/2'>
                    <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Sensor Fusion Visualization</h2>
                    <p className='mb-8 text-gray-600'>
                        Visualization of autonomous vehicle sensor fusion data. Lidar, camera, and IMU from KITTI and NuScenses were fused and visualized.
                    </p>
                    <p className='mb-8 text-gray-600'>
                        TODO: Add model of a car
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div className='mx-auto my-0 flex w-full flex-col flex-wrap items-center p-0 md:flex-row hobbie lg:w-4/5'>
                <div className='flex w-screen flex-col p-0 text-center md:w-full md:text-center'>
                    <h1 className='my-0 text-5xl font-bold leading-normal'>Hobbies</h1>
                </div>

                {/* First Row */}
                <Popup classes={'relative my-12 lg:h-full w-full py-0 animate-bounce sm:w-1/2 md:mb-40'}>
                    <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
                    <Common color={'rgba(244, 244, 247, 0.2)'} />
                </Popup>
                <div className='w-full p-6 sm:w-1/2'>
                    <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Spiderverse Animation</h2>
                    <p className='mb-8 text-gray-600'>Non photorealistic rendering scene of myself in the style of Spiderverse shaders! I created it with React Three Fiber, Maya, and Python. Grease pencil generated with stable diffusion. Read more.</p>
                    <p className='mb-8 text-gray-600'>TODO: Add the spiderverse model</p>
                </div>
            </div>

            {/* Fourth Section */}
            <div className='mx-auto my-0 flex w-full flex-col flex-wrap items-center p-0 md:flex-row lg:w-4/5'>
                <div className='flex w-screen flex-col p-0 text-center md:w-full md:text-center'>
                    <h1 className='my-0 text-5xl font-bold leading-normal'>BLANK: EXTRA</h1>
                </div>

                {/* First row */}
                <div className='w-full p-6 sm:w-1/2'>
                    <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Template</h2>
                    <p className='mb-8 text-gray-600'>Blank section to be used as new rows.</p>
                    <p className='mb-8 text-gray-600'>TODO: Change entire row to a class</p>
                </div>
                <Popup classes={'relative my-12 lg:h-full w-full py-0 animate-bounce  sm:w-1/2 md:mb-40'}>
                    <Model path={'/assets/dog.glb'} spin={false} scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                    <Common color={'rgba(244, 244, 247, 0.2)'} />
                </Popup>

                {/* Second Row */}
                <Popup classes={'relative my-12 lg:h-full w-full py-0 sm:w-1/2 md:mb-40'}>
                    <Model path={'/assets/dog.glb'} spin={false} scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
                    <Common color={'rgba(244, 244, 247, 0.2)'} />
                </Popup>
                <div className='w-full p-6 sm:w-1/2'>
                    <h2 className='mb-3 text-3xl font-bold leading-none text-gray-800'>Template</h2>
                    <p className='mb-8 text-gray-600'>Blank section to be used as new rows.</p>
                    <p className='mb-8 text-gray-600'>TODO: Change entire row to a class</p>
                </div>
            </div>
        </>
  )
}

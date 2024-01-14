'use client'

import {ComponentType, forwardRef, ReactNode, Suspense, useImperativeHandle, useRef} from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import dynamic from "next/dynamic";
import {Card, CardBody} from "@nextui-org/react";


type ViewProps = {
    children: ComponentType;
    color: ComponentType;
    classes: string;
    bounce: string;
};

// @ts-ignore
export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})

const BaseView = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                <path
                    className='opacity-65'
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </svg>
        </div>
    ),
})

export const  ModelView =({children, color, classes, bounce}: ViewProps) => {
    return (
        <div className={classes} >
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50"
                shadow="lg">
                <CardBody>
                    <BaseView orbit className={`relative h-full sm:h-48 sm:w-full`}> {/*  */}
                        <Suspense fallback={null}>
                            {children}
                            {color}
                        </Suspense>
                    </BaseView>
                </CardBody>
            </Card>
        </div>
    )
}
ModelView.defaultProps = {
    bounce: ""
}

export const TextView = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
        <div className='flex h-96 w-full flex-col items-center justify-center'>
            <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
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

TextView.displayName = 'TextView'
ModelView.displayName = 'ModelView'

View.displayName = 'View'


export { View }

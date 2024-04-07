'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

type CommonProps = {
  color: string,
  fov: number,
  rotation: Array<number>,
  position: Array<number>
}
export const Common = ({ color, fov=40, rotation=[0,0,0], position=[0,0,0] }: CommonProps) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <pointLight position={[0, 0, 10]} intensity={5} decay={0.1} />
    <pointLight position={[10, 10, 10]} intensity={5} color='white' decay={0.1} />
    <PerspectiveCamera makeDefault fov={fov} position={position} rotation={rotation} />
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
View.displayName = 'View'

export { View }

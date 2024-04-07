'use client'

import { ReactNode, useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion } from "framer-motion"
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef()

  return (
      <div
        ref={ref}
        className='m-0'
        style={{
          position: 'relative',
          width: ' 100%',
          height: '100%',
          overflow: 'auto',
          touchAction: 'auto',
          margin: 0,
        }}>
        {children}
        <Scene
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
          }}
          eventSource={ref}
          eventPrefix='client'/>
      </div>
  )
}

export { Layout }

'use client'

import { ReactNode, useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from "framer-motion"
import { Transition } from "@/components/dom/transition/transition"

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

export function FramerTemplate ({ children }) {
  const ref = useRef()

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        ref={ref}
        className='m-0'
        style={{
          position: 'relative',
          width: ' 100%',
          height: '100%',
          overflow: 'auto',
          touchAction: 'auto',
          margin: 0,
        }}
        initial={{y: 20, opacity:0}}
        animate={{y: 0, opacity: 1}}
        transition={{ease: "easeInOut", duration:1}}>
        <Transition>
          {children}
        </Transition>
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
      </motion.div>
    </AnimatePresence>
  )
}

export default function Template ({ children }) {
  const ref = useRef()

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        ref={ref}
        className='m-0'
        style={{
          position: 'relative',
          width: ' 100%',
          height: '100%',
          overflow: 'auto',
          touchAction: 'auto',
          margin: 0,
        }}
        initial={{y: 20, opacity:0}}
        animate={{y: 0, opacity: 1}}
        transition={{ease: "easeInOut", duration:1}}>
        <Transition>
          {children}
        </Transition>
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
      </motion.div>
    </AnimatePresence>
  )
}


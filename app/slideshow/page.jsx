'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Slideshow } from "@/components/canvas/Slideshow"
import { Overlay } from '@/components/canvas/Overlay'
import { Leva } from 'leva'
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), { ssr: false })
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  // @ts-ignore
    return (
      <>
        <Leva hidden />
        <Overlay />
        <View className='flex h-screen w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
                <Slideshow />
            </Suspense>
        </View>
      </>
    )
}

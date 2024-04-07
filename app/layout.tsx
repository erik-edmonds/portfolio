"use client"

import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import clsx from "clsx";
import { MotionConfig } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu } from '@/components/dom/menu';
import { motionConfig } from '@/lib/config';
import Template from './template';

const metadata = {
  title: 'Erik Edmonds Portfolio',
  description: 'A portfolio of projects using Computer Vision, Simulation, and 3D Modeling.',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  }
}

export default function RootLayout({ children }) {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, []);

  return (
    <html lang='en'>
      <head />
      <body className = { clsx("min-h-screen font-sans antialiased")}>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <MotionConfig transition={{...motionConfig}}>
          <Layout>
            {children}
          </Layout>
          <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        </MotionConfig>
      </body>
    </html>
  )
}

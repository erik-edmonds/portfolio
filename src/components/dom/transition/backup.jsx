import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UpdateRoute } from "@/components/navigation/routing";

export const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]},
    transitionEnd: {top: "47.5%"}
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: {duration: .5, delay: .4, ease: [0.33, 1, 0.68, 1]}
  }
}

export const curve = (initialPath, targetPath) => {
  return {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
      d: initialPath,
      transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
    }
  }
}

export const translate = {
  initial: {
    top: "-300px"
  },
  enter: {
    top: "-100vh",
    transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]},
    transitionEnd : {
      top: "100vh"
    }
  },
  exit: {
    top: "-300px",
    transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
  }
}

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  }
}

export function Transition({children}) {
  const router = useRouter();
  const route = useState(UpdateRoute)[0].substring(1);

  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  })

  useEffect(() => {
    const resize = () => {
      setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
      })

      resize()
      window.addEventListener("resize", resize)
      return () => window.removeEventListener("resize", resize)
    }
  }, [])


  return (
    <div className="bg-gradient-to-b from-indigo-200">
      <div className={`${dimensions.width != null ? "opacity-100" : "opacity-0"} transition-opacity ease-linear duration-100 bg-black w-screen fixed pointer-events-none h-[calc(100vh+600px)] left-0 top-0`}></div>
      <motion.p {...anim} className="absolute left-1/2 top-[40%] text-white text-center text-[46px] z-3 -translate-x-50">{route}</motion.p>
      { dimensions.width != null && <SVG {...dimensions} /> }
      { children }
    </div>
  )
}


const SVG = ({height, width}) => {

    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)} className="w-screen fixed pointer-events-none h-[calc(100vh+600px)] left-0 top-0">
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    )
}

import React, { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
import { cn } from "../../utils/cn"

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const contentRef = useRef(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90
    }
  )
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90
    }
  )

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full flex", className)}
    >
      <svg
        viewBox={`0 0 20 ${svgHeight}`}
        width="20"
        // Set the SVG height
        height={svgHeight}
        className="absolute top-0 left-[-30px] block"
        aria-hidden="true"
      >
        <motion.path
          d={`M 1 0V 0 l 18 24 V ${svgHeight * 0.45} l -18 24V ${svgHeight}`}
          fill="none"
          stroke="yellow"
          strokeOpacity="0.08"
          strokeWidth="5.5"
          transition={{
            duration: 10
          }}
        ></motion.path>
        <motion.path
          d={`M 1 0V 0 l 18 24 V ${svgHeight * 0.45} l -18 24V ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="5.5"
          className="motion-reduce:hidden"
          transition={{
            duration: 10
          }}
        ></motion.path>
        <defs>
          <motion.linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            // set y1 for gradient
            y1={y1}
            // set y2 for gradient
            y2={y2}
          >
            <stop stopColor="yellow" stopOpacity="0"></stop>
            <stop stopColor="yellow"></stop>
            <stop offset="0.325" stopColor="#6344F5"></stop>
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
          </motion.linearGradient>
        </defs>
      </svg>
      <div className="flex-grow" ref={contentRef}>{children}</div>
    </motion.div>
  )
}

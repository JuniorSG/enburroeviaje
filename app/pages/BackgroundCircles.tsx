import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity:0,
      }}
      animate={{
        scale: [4,1,2,4,1],
        opacity: [0.5,1,0.2,0.5,1],
      }}
      transition={{
        duration:1.5,
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border-[#ffffff] border-2 rounded-full h-[250px] w-[250px] mt-52 animate-ping'/>
      <div className='absolute border-[#333333] border-2 opacity-20 rounded-full h-[300px] w-[300px] mt-52'/>
      <div className='absolute border-[#333333] border-2 opacity-5 rounded-full h-[500px] w-[500px] mt-52'/>
      <div className='absolute border-[#F7AB0A] border-2 opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
      <div className='absolute border-[#333333] border-2 opacity-20 rounded-full h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles
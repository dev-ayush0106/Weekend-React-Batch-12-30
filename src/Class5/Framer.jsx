import React from 'react'
import './Framer.css'
import { motion } from 'motion/react'

const Framer = () => {
  return (
    <div>
      <motion.div className="box"
        // animate={{
        //     x:600,
        //     y:500,
        //     rotate:360,
        //     scale:0.5
        // }}

        // drag

        // dragConstraints={{
        //     left:0,
        //     top:0,
        //     right:800,
        //     bottom:600
        // }}

        // whileHover={{
        //     backgroundColor:"green",
        //     scale:0.5
        // }}

        whileTap={{
            scale:0.5
        }}

        transition={{
            duration:2
        }}
      >

      </motion.div>
    </div>
  )
}

export default Framer

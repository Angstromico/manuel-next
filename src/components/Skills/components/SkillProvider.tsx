'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
  src: string
  width: number
  height: number
  index: number
  name: string
}

const SkillProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationDelay = 0.3

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={imageVariants}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        className='relative z-50'
        src={src}
        width={width}
        height={height}
        alt={name}
      />
    </motion.div>
  )
}

export default SkillProvider

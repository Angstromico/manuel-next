'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/app/utils/motion'
import { SparklesIcon } from '@heroicons/react/20/solid'

const SkillText = ({
  title,
  subtitle,
  never,
}: {
  title: string
  subtitle: string
  never: string
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animation triggers only once
    threshold: 0.1, // start the animation when 10% of the component is in view
  })

  return (
    <div
      ref={ref}
      className='w-full h-auto centeredFlex flex-col text-white dark:text-white'
    >
      {/* Animation starts when this section is in view */}
      <motion.div
        className='Welcome-box opacity-90 py-4 px-1 border border-[#8fbd078b] dark:border-[#7042f88b]'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInFromTop}
      >
        <SparklesIcon className='text-[#4b6400] dark:text-[#b49bff] mr-2 h-5 w-5' />
        <h1 className='Welcome-text text-sm'>{title}</h1>
      </motion.div>
      <motion.p
        className='text-3xl md:text-4xl font-medium mt-3 text-center mb-4'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInFromLeft(0.5)}
      >
        {subtitle}
      </motion.p>
      <motion.p
        className='text-2xl md:text-3xl cursive text-center mb-10 mt-3'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInFromRight(0.5)}
      >
        {never}
      </motion.p>
    </div>
  )
}
export default SkillText

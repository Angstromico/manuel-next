'use client'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/app/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

export interface PropsHero {
  title: string
  providing: {
    title: string
    subtitle: string
    experience: string
    description: string
  }
}
const HeroContent = ({ title, providing }: PropsHero) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row items-center justify-center px-20 my-8 w-full z-20 text-bWhite'
    >
      <div className='h-full w-full flex flex-col gap-5 m-auto justify-center text-start'>
        <motion.div
          className='Welcome-box opacity-90 py-4 px-1 border border-[#8fbd078b] dark:border-[#7042f88b]'
          variants={slideInFromTop}
        >
          <SparklesIcon className='text-[#4b6400] dark:text-[#b49bff] mr-2 h-5 w-5' />
          <h1 className='Welcome-text text-sm'>{title}</h1>
        </motion.div>
        <motion.div
          className='flex flex-col gap-6 mt-6 text-6xl font-bold max-w-2xl w-auto h-auto'
          variants={slideInFromLeft(0.5)}
        >
          {providing.title}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 dark:from-purple-500 to-red-500 dark:to-cyan-500'>
            {providing.subtitle}
          </span>
          {providing.experience}
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-200 my-5 max-w-[600px] rounded-xl p-2 bg-background bg-opacity-30'
        >
          {providing.description}
        </motion.p>
      </div>
    </motion.div>
  )
}
export default HeroContent

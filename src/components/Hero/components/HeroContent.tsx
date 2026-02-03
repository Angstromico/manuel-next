'use client'
import { motion } from 'framer-motion'
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/app/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export interface PropsHero {
  title: string
  providing: {
    title: string
    subtitle: string
    experience: string
    description: string
    more: string
  }
}

const HeroContent = ({ title, providing }: PropsHero) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-col xl:flex-row items-center justify-center px-4 md:px-20 mt-20 md:my-20 w-full z-[20] gap-10 max-w-7xl mx-auto'
    >
      {/* Text Section */}
      <div className='flex flex-col gap-5 justify-center m-auto text-start items-start w-full xl:w-1/2'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9] flex items-center rounded-lg bg-[#00000030]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px] text-[#b49bff] font-medium'>
            {title}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-3 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>{providing.title}</span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            {providing.subtitle}
          </span>
          <span>{providing.experience}</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          {providing.description}
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className='py-2 px-6 button-primary text-center cursor-pointer rounded-lg text-white font-bold text-lg hover:scale-105 transition-transform duration-300'
          href='https://angstromico-cv-manuel-morales.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {providing.more}
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full xl:w-1/2 flex justify-center items-center'
      >
        <div className='relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px]'>
          <Image
            src='/mainIconsdark.svg'
            alt='work icons'
            fill
            className='object-contain animate-slow-spin-reverse'
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
export default HeroContent

'use client'
import { slideInFromTop } from '@/app/utils/motion'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Encryption = () => {
  const t = useTranslations('Encryption')

  return (
    <section className='centeredFlex full relative h-[500px] md:h-[800px]'>
      <div className='absolute top-1/4 z-[5]'>
        <motion.div
          variants={slideInFromTop}
          className='text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200'
        >
          {t('performance')}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 dark:from-purple-500 to-red-500 dark:to-cyan-500 mx-1'>
            &
          </span>
          {t('security')}
        </motion.div>
      </div>
      <div className='centeredFlex flex-col -translate-y-4 absolute z-20'>
        <div className='flex flex-col items-center cursor-pointer'>
          {/* Violet arc with width and height of 50px */}
          <svg
            className='hover:translate-y-5 transition-all duration-200 translate-y-11'
            width='60'
            height='60'
            viewBox='0 0 50 50'
          >
            {/* Make this svg darker */}
            <path
              d='M 10,25 A 15,15 0 0,1 40,25'
              fill='none'
              stroke='#6a0dad'
              strokeWidth='5'
            />
          </svg>
          <Image
            src='/lock.png'
            className='z-10'
            width='90'
            height='90'
            alt='Lock'
          />
        </div>
        <div className='Welcome-box px-4 py-1 z-20 border my-5 border-[#7042] dark:border-[#7042f78b] opacity-90'>
          <h2 className='Welcome-text text-sm'>{t('quality')}</h2>
        </div>
      </div>
      <div className='italic text-xl font-medium text-center text-gray-200 dark:text-gray-300'>
        <h3 className='mt-64'>{t('secure')}</h3>
      </div>
      <div className='absolute inset-0 -z-10'>
        <video
          loop
          muted
          autoPlay
          src='/hole.webm'
          playsInline
          preload='false'
          className='w-full h-full opacity-70 dark:opacity-20 object-cover'
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </section>
  )
}
export default Encryption

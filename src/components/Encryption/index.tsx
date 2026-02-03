'use client'
import { slideInFromTop } from '@/app/utils/motion'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Encryption = () => {
  const t = useTranslations('Encryption')

  return (
    <section className='flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh] relative w-full h-full overflow-hidden'>
      <div className='absolute top-0 z-[5] w-full mt-20'>
        <motion.div
          variants={slideInFromTop}
          className='text-3xl sm:text-4xl md:text-5xl font-medium text-center text-gray-200'
        >
          {t('performance')}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mx-2'>
            &
          </span>
          {t('security')}
        </motion.div>
      </div>

      <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-20 w-auto h-auto mt-20'>
        <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
          <Image
            src='/lock.png'
            alt='Lock Main'
            width={70}
            height={70}
            className='z-10 transition-transform duration-300 group-hover:scale-110 ease-in-out'
          />
          <div className='Welcome-box px-4 py-2 z-20 border my-5 border-[#7042f88b] opacity-90 rounded-full bg-black/40 backdrop-blur-sm'>
            <h1 className='Welcome-text text-sm sm:text-base text-gray-300'>
              {t('quality')}
            </h1>
          </div>
        </div>
      </div>

      <div className='absolute bottom-10 z-[20] px-5'>
        <div className='italic text-xl sm:text-2xl font-medium text-center text-gray-300'>
          {t('secure')}
        </div>
      </div>

      <div className='w-full flex items-start justify-center absolute inset-0 -z-10'>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='false'
          className='w-full h-full object-cover opacity-60 dark:opacity-30'
          src='/hole.webm'
        />
      </div>
    </section>
  )
}
export default Encryption

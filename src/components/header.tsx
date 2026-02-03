'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocalSwitcher from './local-switcher'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'
import Stars from './Start'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const t = useTranslations('Navigation')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(savedDarkMode)
    document.documentElement.classList.toggle('dark', savedDarkMode)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    document.documentElement.classList.toggle('dark', newMode)
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const NavigationLinks = () => (
    <>
      <Link
        className='link-nav text-lg hover:text-purple-400 transition-colors'
        href='#about'
      >
        {t('aboutMe')}
      </Link>
      <Link
        className='link-nav text-lg hover:text-purple-400 transition-colors'
        href='#skills'
      >
        {t('skills')}
      </Link>
      <Link
        className='link-nav text-lg hover:text-purple-400 transition-colors'
        href='#projects'
      >
        {t('projects')}
      </Link>
      <Link
        className='link-nav text-lg hover:text-purple-400 transition-colors'
        href='#calendar'
      >
        {t('calendar')}
      </Link>
    </>
  )

  const SocialLinks = () => (
    <>
      {Socials.map((social, i) => {
        const { name, src, link, mail } = social
        const email = `mailto:${link}`
        return (
          <Link target='_blank' key={i} href={mail ? email : link}>
            <Image
              src={src}
              alt={name}
              width={24}
              height={24}
              className='md:w-8 md:h-8 hover:scale-110 transition-transform'
            />
          </Link>
        )
      })}
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-2 px-6 shadow-md' : 'py-6 px-10'
      } flex items-center justify-between gap-4 max-w-[1400px] mx-auto rounded-b-2xl`}
    >
      {/* Logo */}
      <nav className='flex items-center gap-4'>
        <Link className='font-bold flex items-center gap-2' href='/'>
          <div className='relative w-10 h-10 md:w-12 md:h-12'>
            <Image
              className='hover:animate-spin-slow object-contain'
              src='/hero.png'
              alt='logo'
              fill
            />
          </div>
          <span className='hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500'>
            Manuel Morales
          </span>
        </Link>
      </nav>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-8 bg-[#0300145e] border border-[#7042f861] px-6 py-2 rounded-full backdrop-blur-md'>
        <NavigationLinks />
      </div>

      {/* Socials & Toggles */}
      <div className='hidden md:flex items-center gap-4'>
        <SocialLinks />
        <div className='flex items-center gap-2 bg-[#0300145e] border border-[#7042f861] p-1 rounded-full backdrop-blur-md'>
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full hover:bg-white/10 transition-colors'
            aria-label={
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          <LocalSwitcher />
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        className='md:hidden p-2 text-white'
        aria-label='Toggle menu'
      >
        <Image
          src='/hamburger-button.png'
          alt='Menu'
          width={30}
          height={30}
          className='invert dark:invert-0'
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden'
          >
            <button
              className='absolute top-6 right-6 text-2xl text-white hover:text-purple-400'
              onClick={toggleMenu}
            >
              ✕
            </button>
            <Stars />

            <div
              className='flex flex-col items-center gap-6 text-2xl'
              onClick={toggleMenu}
            >
              <NavigationLinks />
            </div>

            <div className='flex items-center gap-6 mt-4'>
              <SocialLinks />
            </div>

            <div className='flex items-center gap-4'>
              <button onClick={toggleDarkMode} className='text-2xl p-2'>
                {isDarkMode ? '🌞' : '🌙'}
              </button>
              <LocalSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

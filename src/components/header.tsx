'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocalSwitcher from './local-switcher'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'
import Stars from './Start'

export default function Header() {
  const t = useTranslations('Navigation')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(savedDarkMode)
    document.documentElement.classList.toggle('dark', savedDarkMode)
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
      <Link className='link-nav' href='#about'>
        {t('aboutMe')}
      </Link>
      <Link className='link-nav' href='#skills'>
        {t('skills')}
      </Link>
      <Link className='link-nav' href='#projects'>
        {t('projects')}
      </Link>
      <Link className='link-nav' href='#calendar'>
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
              width={30}
              height={30}
              className='md:w-10 md:h-10'
            />
          </Link>
        )
      })}
    </>
  )

  return (
    <header className='p-4 md:p-6 lg:p-8 w-full flex items-center justify-between gap-4'>
      {/* Logo and Navigation Links */}
      <nav className='flex items-center gap-4'>
        <Link className='font-bold' href='/'>
          <Image
            className='hover:animate-spin-slow'
            src='/hero.png'
            alt='logo'
            width={50}
            height={50}
          />
        </Link>
        <div className='hidden md:flex gap-4'>
          <NavigationLinks />
        </div>
      </nav>

      {/* Hamburger Button for Mobile */}
      <button
        onClick={toggleMenu}
        className='md:hidden p-2'
        aria-label='Toggle menu'
      >
        <Image src='/hamburger-button.png' alt='Menu' width={30} height={30} />
      </button>

      {/* Social Icons, Dark Mode Toggle, and Locale Switcher */}
      <div className='hidden md:flex gap-2'>
        <SocialLinks />
        <button
          onClick={toggleDarkMode}
          className='p-2 border rounded'
          aria-label={
            isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
        <LocalSwitcher />
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black z-40 flex justify-end md:hidden'
          onClick={toggleMenu} // Close the menu when clicking outside
        >
          <div
            className='h-full w-full max-w-[600px] p-6 flex flex-col items-start gap-4 transition-transform transform translate-x-0 overflow-hidden'
            onClick={(e) => e.stopPropagation()} // Prevent close on inner click
          >
            <Stars />
            <button
              className='self-end text-xl mb-6 text-white'
              onClick={toggleMenu}
              aria-label='Close menu'
            >
              ✕
            </button>
            <NavigationLinks />
            <div className='mt-6 flex gap-4'>
              <SocialLinks />
              <button
                onClick={toggleDarkMode}
                className='p-2 border rounded'
                aria-label={
                  isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
                }
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
              <LocalSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

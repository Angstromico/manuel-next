'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocalSwitcher from './local-switcher'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

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

  return (
    <header className='p-4 md:p-6 lg:p-8 w-full flex flex-col md:flex-row items-center justify-between gap-4'>
      {/* Logo and Navigation Links */}
      <nav className='flex items-center justify-center md:justify-start gap-4 md:gap-6'>
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
          <Link className='link-nav' href='#about'>
            {t('aboutMe')}
          </Link>
          <Link className='link-nav' href='#skills'>
            {t('skills')}
          </Link>
          <Link className='link-nav' href='#projects'>
            {t('projects')}
          </Link>
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

      {/* Social Icons */}
      <nav className='hidden md:flex gap-2 md:gap-4'>
        {Socials.map((social, i) => {
          const { name, src, link, mail } = social
          const email = `mailto:${link}`
          return (
            <Link key={i} href={`${mail ? email : link}`}>
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
      </nav>

      {/* Dark Mode Toggle and Locale Switcher */}
      <div className='hidden md:flex items-center gap-2 md:gap-4'>
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

      {/* Mobile Navigation Links (conditional) */}
      {isMenuOpen && (
        <div className='flex flex-col items-center gap-2 md:hidden mt-4'>
          <Link className='link-nav' href='#about'>
            {t('aboutMe')}
          </Link>
          <Link className='link-nav' href='#skills'>
            {t('skills')}
          </Link>
          <Link className='link-nav' href='#projects'>
            {t('projects')}
          </Link>
        </div>
      )}
      {isMenuOpen && (
        <nav className='flex md:hidden gap-2 md:gap-4'>
          {Socials.map((social, i) => {
            const { name, src, link, mail } = social
            const email = `mailto:${link}`
            return (
              <Link key={i} href={`${mail ? email : link}`}>
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
        </nav>
      )}
      {isMenuOpen && (
        <div className='flex md:hidden items-center gap-2 md:gap-4'>
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
      )}
    </header>
  )
}

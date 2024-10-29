'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocalSwitcher from './local-switcher'
import { useEffect, useState } from 'react'

export default function Header() {
  const t = useTranslations('Navigation')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check localStorage for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(savedDarkMode)
    document.documentElement.classList.toggle('dark', savedDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    document.documentElement.classList.toggle('dark', newMode)
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode)) // Save new mode in localStorage
  }

  return (
    <header className='p-4 w-full'>
      <nav className='flex items-center justify-between'>
        <Link className='font-bold' href='/'>
          {t('home')}
        </Link>
        <div className='flex items-center gap-4'>
          {/* Dark Mode Toggle Button */}
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
      </nav>
    </header>
  )
}

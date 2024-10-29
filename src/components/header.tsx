'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocalSwitcher from './local-switcher'
import { useEffect, useState } from 'react'

export default function Header() {
  const t = useTranslations('Navigation')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Initialize dark mode state based on current class on html
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDarkMode((prev) => !prev)
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

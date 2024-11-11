'use client'
import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

const Calendar = () => {
  const t = useTranslations('Calendar')
  const pathname = usePathname() // Gets the current path
  const [locale, setLocale] = useState('en') // Default to 'en'

  const months = {
    en: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    es: [
      'En',
      'Fe',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
  }

  const explicitTheme = {
    light: ['#f3e8ff', '#d4b0ff', '#b47cff', '#8a2be2', '#4b0082'], // Light violet tones
    dark: ['#2a0e61', '#4c1c8a', '#7b38b3', '#a25fed', '#d9b3ff'], // Dark violet tones
  }

  useEffect(() => {
    if (pathname.startsWith('/es')) {
      setLocale('es')
    } else {
      setLocale('en')
    }
  }, [pathname])

  const monthsList = locale === 'en' ? months.en : months.es

  return (
    <section id='calendar' className='full centeredFlex my-12'>
      <GitHubCalendar
        username='Angstromico'
        labels={{
          months: monthsList,
          legend: {
            less: t('less'),
            more: t('more'),
          },
          totalCount: `{{count}} ${t('contribution')}`, // Translate "contribution" dynamically
        }}
        theme={explicitTheme}
      />
    </section>
  )
}

export default Calendar

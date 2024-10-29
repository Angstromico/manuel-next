'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }

  const takeWord = (lang: string, en: string, es: string) => {
    return lang === 'en' ? en : es
  }

  return (
    <label className='relative inline-block'>
      <p className='sr-only'>Change language</p>
      <select
        defaultValue={localActive}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>{takeWord(localActive, 'English', 'Inglés')}</option>
        <option value='es'>
          {takeWord(localActive, 'Spanish', 'Español')}
        </option>
      </select>
    </label>
  )
}

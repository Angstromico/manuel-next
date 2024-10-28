'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'

export default function LocalSwitcher() {
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
    if (lang === 'en') return en
    return es
  }
  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent py-2'
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

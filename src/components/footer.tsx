import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className='my-10 text-center'>
      <p>
        {currentYear} © {t('copyright')}
      </p>
    </footer>
  )
}

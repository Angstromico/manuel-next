import { useTranslations } from 'next-intl'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Footer() {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className='my-10 text-center'>
      <p className='mb-4'>
        {currentYear} © {t('copyright')}
      </p>
      <div className='flex justify-center gap-6'>
        <a
          href='mailto:manuesteban1990@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
          aria-label='Twitter'
        >
          <SiGmail />
        </a>
        <a
          href='https://www.linkedin.com/in/manuel-esteban-morales-zuarez-68573b189/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/Angstromico'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}

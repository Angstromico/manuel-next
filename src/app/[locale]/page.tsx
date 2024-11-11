import { useTranslations } from 'next-intl'
import { Hero, Skills, Encryption, Projects, Calendar } from '@/components'

export default function Home() {
  const t = useTranslations('IndexPage')
  const providing = {
    title: t('providing.title'),
    subtitle: t('providing.subtitle'),
    experience: t('providing.experience'),
    description: t('providing.description'),
    more: t('providing.more'),
  }

  return (
    <div className='w-full mt-5 flex flex-col justify-center items-center'>
      <h1 className='text-center md:text-left text-4xl font-semibold'>
        {t('title')}
      </h1>
      <p>{t('description')}</p>
      <Hero title={t('heroTitle')} providing={providing} />
      <Skills />
      <Encryption />
      <Projects />
      <Calendar />
    </div>
  )
}

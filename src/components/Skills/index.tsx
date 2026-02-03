import { useTranslations } from 'next-intl'
import {
  Frontend_skill,
  Backend_skill,
  Skill_data,
  Full_stack,
} from '@/constants'
import SkillText from './components/SkillText'
import SkillCategory from './components/SkillCategory'

const Skills = () => {
  const t = useTranslations('Skills')

  return (
    <section
      id='skills'
      className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    >
      <SkillText
        title={t('title')}
        subtitle={t('subtitle')}
        never={t('never')}
      />
      <SkillCategory skills={Frontend_skill} />
      <SkillCategory skills={Backend_skill} />
      <SkillCategory skills={Skill_data} />
      <SkillCategory skills={Full_stack} />
      {/* Video Background */}
      <div className='absolute inset-0 -z-10 w-full h-full'>
        <video
          className='w-full h-full object-cover opacity-50 dark:opacity-30'
          preload='false'
          playsInline
          loop
          muted
          autoPlay
          src='/blackholee.webm'
        />
      </div>
    </section>
  )
}

export default Skills

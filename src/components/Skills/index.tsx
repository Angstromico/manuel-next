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
      className='centeredFlex gap-3 h-full relative overflow-hidden py-20 mb-80 px-2'
      style={{ transform: 'scale(0.9)' }}
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
      <div className='absolute full inset-0 -z-10 opacity-70 dark:opacity-30'>
        <video
          className='w-full h-full object-cover'
          style={{ position: 'absolute', top: 0, left: 0 }}
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

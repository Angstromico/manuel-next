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
      className='centeredFlex gap-3 h-full relative overflow-hidden py-20'
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
      <div className='full absolute'>
        <div className='full -z-10 opacity-30 absolute centeredFlex bg-cover'>
          <video
            className='w-full'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/blackholee.webm'
          />
        </div>
      </div>
    </section>
  )
}

export default Skills

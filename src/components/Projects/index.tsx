'use client'
import { useTranslations } from 'next-intl'
import ProjectCard from './components/ProjectCard'

const Projects = () => {
  const t = useTranslations('Projects')

  return (
    <section id='projects' className='flex-col centeredFlex py-20'>
      <div className='full flex flex-col md:flex-row justify-center flex-wrap gap-6 md:gap-10 px-3 md:px-10'>
        <h2 className='text-center xl:text-left text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-dark dark:bg-gradient-light py-20'>
          {t('title')}
        </h2>
        <div className='h-full w-screen flex flex-col xl:flex-row gap-16 xl:gap-5 px-10'>
          {/* Adding a wrapper div with grid at xl breakpoint */}
          <div className='w-full grid grid-cols-1 xl:grid-cols-3 gap-16 xl:gap-5'>
            <ProjectCard
              src='/mia.png'
              title='MIA Femtech'
              description={t('firstPage')}
              href='https://miafemtech.com/'
              to={t('to')}
            />
            <ProjectCard
              src='/gami.png'
              title='GamifyMex'
              description={t('secondPage')}
              href='https://gamify-mexico.netlify.app/'
              to={t('to')}
            />
            <ProjectCard
              src='/velzia.png'
              title='Velzia Sig App'
              description={t('thirdPage')}
              href='https://sig.chapnikandgiesen.com/'
              to={t('to')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects

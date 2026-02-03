'use client'
import { useTranslations } from 'next-intl'
import ProjectCard from './components/ProjectCard'

const Projects = () => {
  const t = useTranslations('Projects')

  return (
    <section
      id='projects'
      className='flex flex-col items-center justify-center py-20 overflow-hidden relative z-20'
    >
      <div className='w-full max-w-7xl px-5 md:px-10 flex flex-col items-center'>
        <h2 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 py-10 mb-10'>
          {t('title')}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
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
    </section>
  )
}
export default Projects

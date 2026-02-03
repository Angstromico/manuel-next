import Image from 'next/image'
import Link from 'next/link'

interface Props {
  src: string
  title: string
  description: string
  href: string
  to: string
}

const ProjectCard = ({ src, title, description, href, to }: Props) => {
  return (
    <div className='group relative overflow-hidden rounded-xl bg-[#1a1a1a]/80 dark:bg-[#0f172a]/60 backdrop-blur-md border border-gray-700/50 dark:border-purple-900/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 z-10'>
      <div className='relative w-full h-48 overflow-hidden'>
        <Image
          src={src}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
      </div>

      <div className='p-5 flex flex-col gap-3'>
        <h1 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500'>
          {title}
        </h1>
        <p className='text-sm text-gray-300 line-clamp-3'>{description}</p>

        <div className='mt-4 flex w-full'>
          <Link
            className='w-full text-center py-2 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition-all shadow-md hover:shadow-lg'
            href={href}
            target='_blank'
          >
            {to}
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard

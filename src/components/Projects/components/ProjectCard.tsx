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
    <div className='relative overflow-hidden border border-gray-800 dark:border-[#2A0E61] rounded-lg shadow-lg'>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain mb-2'
      />
      <h1 className='mx-2 text-xl md:text-2xl font-semibold'>{title}</h1>
      <p className='mx-2 mt-2 dark:text-gray-300 text-gray-800'>
        {description}
      </p>
      <div className='my-5 flex w-full justify-center items-center'>
        <Link
          className='font-bold p-2 rounded-lg dark:bg-violet-800 dark:hover:bg-violet-950 bg-violet-700 hover:bg-violet-800 transition-colors text-white'
          href={href}
          target='_blank'
        >
          {to}
        </Link>
      </div>
    </div>
  )
}
export default ProjectCard

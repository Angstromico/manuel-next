import Image from 'next/image'
import Link from 'next/link'

interface Props {
  src: string
  title: string
  description: string
  href: string
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='relative overflow-hidden border border-gray-800 dark:border-[#2A0E61] rounded-lg shadow-lg'
    >
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
    </Link>
  )
}
export default ProjectCard

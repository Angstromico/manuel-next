import HeroContent from './components/HeroContent'
import type { PropsHero } from './components/HeroContent'
const Hero = ({ title, providing }: PropsHero) => {
  return (
    <section className='w-full sm:w-screen py-12 md:py-16 flex flex-col relative top-5'>
      <HeroContent title={title} providing={providing} />
      <video
        autoPlay
        muted
        loop
        className='top-0 left-0 z-0 w-full h-full object-cover absolute opacity-80'
      >
        <source src='/blackHole.webm' type='video/mp4' />
        <source src='/blackHole.mp4' type='video/mp4' />
      </video>
    </section>
  )
}
export default Hero

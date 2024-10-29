'use client'
import { AnimatedBackground } from 'animated-backgrounds'

const AnimateBg = () => {
  return (
    <div className='dark:hidden absolute inset-0 z-0 pointer-events-none'>
      <AnimatedBackground
        style={{ background: 'white' }}
        animationName='geometricShapes'
      />
    </div>
  )
}
export default AnimateBg

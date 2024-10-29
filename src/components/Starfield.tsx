'use client'

import React, { useEffect } from 'react'

interface StarfieldProps {
  speedFactor?: number
  backgroundColor?: string
  starColor?: [number, number, number]
  starCount?: number
}

const Starfield: React.FC<StarfieldProps> = ({
  speedFactor = 0.05,
  backgroundColor = 'black',
  starColor = [255, 255, 255],
  starCount = 5000,
}) => {
  useEffect(() => {
    const canvas = document.getElementById('starfield') as HTMLCanvasElement

    if (canvas) {
      const c = canvas.getContext('2d')
      if (c) {
        let w = window.innerWidth
        let h = window.innerHeight

        const setCanvasExtents = () => {
          canvas.width = w
          canvas.height = h
        }

        setCanvasExtents()
        window.onresize = () => setCanvasExtents()

        const makeStars = (count: number) => {
          const out = []
          for (let i = 0; i < count; i++) {
            const s = {
              x: Math.random() * 1600 - 800,
              y: Math.random() * 900 - 450,
              z: Math.random() * 1000,
            }
            out.push(s)
          }
          return out
        }

        let stars = makeStars(starCount)

        const clear = () => {
          c.fillStyle = backgroundColor
          c.fillRect(0, 0, canvas.width, canvas.height)
        }

        const putPixel = (x: number, y: number, brightness: number) => {
          const rgb = `rgba(${starColor[0]},${starColor[1]},${starColor[2]},${brightness})`
          c.fillStyle = rgb
          c.fillRect(x, y, 1, 1)
        }

        const moveStars = (distance: number) => {
          stars.forEach((s) => {
            s.z -= distance
            if (s.z <= 1) s.z += 1000
          })
        }

        let prevTime: number
        const init = (time: number) => {
          prevTime = time
          requestAnimationFrame(tick)
        }

        const tick = (time: number) => {
          const elapsed = time - prevTime
          prevTime = time

          moveStars(elapsed * speedFactor)
          clear()

          const cx = w / 2
          const cy = h / 2

          stars.forEach((star) => {
            const x = cx + star.x / (star.z * 0.001)
            const y = cy + star.y / (star.z * 0.001)

            if (x >= 0 && x < w && y >= 0 && y < h) {
              const d = star.z / 1000.0
              const b = 1 - d * d
              putPixel(x, y, b)
            }
          })

          requestAnimationFrame(tick)
        }

        requestAnimationFrame(init)
        window.addEventListener('resize', () => setCanvasExtents())
      }
    }

    return () => {
      window.onresize = null
    }
  }, [speedFactor, backgroundColor, starColor, starCount])

  return (
    <canvas
      id='starfield'
      style={{
        padding: 0,
        margin: 0,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
        opacity: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    ></canvas>
  )
}

export default Starfield

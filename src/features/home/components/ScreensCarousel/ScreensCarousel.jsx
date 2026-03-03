import { useRef, useEffect } from 'react'
import {
  CarouselWrapper,
  CarouselTrack,
  CarouselList,
  CarouselItem,
  CarouselImg,
  BottomShadow,
} from './styles'

const screenImages = [
  { src: '/screens/screen1.jpg', alt: 'Экран 1' },
  { src: '/screens/screen2.jpg', alt: 'Экран 2' },
  { src: '/screens/screen3.jpg', alt: 'Экран 3' },
  { src: '/screens/screen4.jpg', alt: 'Экран 4' },
  { src: '/screens/screen5.jpg', alt: 'Экран 5' },
  { src: '/screens/screen6.jpg', alt: 'Экран 6' },
  { src: '/screens/screen7.jpg', alt: 'Экран 7' },
  { src: '/screens/screen8.jpg', alt: 'Экран 8' },
  { src: '/screens/screen9.jpg', alt: 'Экран 9' },
]

const COUNT = screenImages.length
const SPEED = 0.5

export const ScreensCarousel = () => {
  const trackRef = useRef(null)
  const rafRef = useRef(null)
  const offsetRef = useRef(0)
  const singleWidthRef = useRef(0)
  const readyRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const items = track.querySelectorAll('li')
      if (items.length < COUNT * 2) return

      const firstRect = items[0].getBoundingClientRect()
      const secondSetRect = items[COUNT].getBoundingClientRect()
      singleWidthRef.current = secondSetRect.left - firstRect.left

      readyRef.current = true
    }

    const images = track.querySelectorAll('img')
    let loaded = 0
    const total = images.length

    const onLoad = () => {
      loaded++
      if (loaded >= total) measure()
    }

    images.forEach((img) => {
      if (img.complete) {
        loaded++
      } else {
        img.addEventListener('load', onLoad)
        img.addEventListener('error', onLoad)
      }
    })

    if (loaded >= total) measure()

    const fallback = setTimeout(measure, 500)

    return () => {
      clearTimeout(fallback)
      images.forEach((img) => {
        img.removeEventListener('load', onLoad)
        img.removeEventListener('error', onLoad)
      })
    }
  }, [])

  useEffect(() => {
    const loop = () => {
      if (readyRef.current && singleWidthRef.current > 0) {
        offsetRef.current -= SPEED

        if (Math.abs(offsetRef.current) >= singleWidthRef.current) {
          offsetRef.current += singleWidthRef.current
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
        }
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const doubleImages = [...screenImages, ...screenImages]

  return (
    <CarouselWrapper>
      <CarouselTrack ref={trackRef}>
        <CarouselList>
          {doubleImages.map((img, i) => (
            <CarouselItem key={`${img.alt}-${i}`}>
              <CarouselImg
                src={img.src}
                alt={img.alt}
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselList>
      </CarouselTrack>
      <BottomShadow />
    </CarouselWrapper>
  )
}

export default ScreensCarousel
import { useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import './styles.css';

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
];

const SPEED = 60;

export const ScreensCarousel = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      const firstList = track.querySelector('.screens-carousel__list');
      if (firstList) {
        const listWidth = firstList.getBoundingClientRect().width;
        if (listWidth > 0) {
          offsetRef.current = (offsetRef.current + SPEED * delta) % listWidth;
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, []);

  const fadeColor = isDark ? '#121212' : '#f5f5f5';

  return (
    <div
      className="screens-carousel"
      style={{ '--fade-color': fadeColor }}
    >
      <div className="screens-carousel__track" ref={trackRef}>
        {[0, 1, 2].map((copyIndex) => (
          <ul
            key={copyIndex}
            className="screens-carousel__list"
            aria-hidden={copyIndex > 0}
          >
            {screenImages.map((img, i) => (
              <li key={i} className="screens-carousel__item">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="screens-carousel__img"
                  draggable={false}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="screens-carousel__bottom-shadow" />
    </div>
  );
};

export default ScreensCarousel;
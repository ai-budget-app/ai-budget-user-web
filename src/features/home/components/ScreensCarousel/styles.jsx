import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  height: 420px;

  @media (max-width: 1024px) {
    height: 340px;
  }

  @media (max-width: 768px) {
    height: 260px;
  }

  @media (max-width: 480px) {
    height: 190px;
  }
`

export const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
  user-select: none;

  @media (prefers-reduced-motion: reduce) {
    transform: translate3d(0, 0, 0) !important;
  }
`

export const CarouselList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 0 12px;
  list-style: none;
  margin: 0;
`

export const CarouselItem = styled.li`
  flex: 0 0 auto;
`

export const CarouselImg = styled.img`
  height: 620px;
  width: auto;
  border-radius: 24px;
  display: block;
  object-fit: cover;
  -webkit-user-drag: none;
  pointer-events: none;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    height: 480px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    height: 360px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    height: 260px;
    border-radius: 12px;
  }
`

export const BottomShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.palette.background.default} 100%
  );
  pointer-events: none;
  z-index: 3;

  @media (max-width: 768px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 70px;
  }
`
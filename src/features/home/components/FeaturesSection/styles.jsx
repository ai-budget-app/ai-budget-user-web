import styled from 'styled-components'

export const MarqueeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  height: 360px;
  overflow: hidden;

  background: transparent;
  border: none;
  border-radius: 0;

  /* Fade */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );

  @media (max-width: 768px) {
    height: 260px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`
export const MarqueeContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform;
`

export const MarqueeItem = styled.div`
  height: 60px; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;

  color: ${({ theme }) => theme?.palette?.text?.primary};
  opacity: 0,75;

  @media (max-width: 768px) {
    height: 48px;
    font-size: 26px;
  }

  @media (max-width: 480px) {
    height: 38px;
    font-size: 20px;
  }
`
import { ButtonFilled, ButtonOutlined } from '@/shared/ui/button';
import GradientText from '../GradientText/GradientText';
import {
  HeroSectionContainer,
  SilkWrapper,
  GradientOverlay,
  ContentWrapper,
  ButtonGroup,
  DashboardWrapper,
  DashboardGlow,
} from './styles';
import Silk from '../Silk/Silk';
import ScreensCarousel from '../ScreensCarousel/ScreensCarousel';

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <SilkWrapper>
        <Silk
          speed={5}
          scale={1}
          color="#3a88fe"
          noiseIntensity={1.5}
          rotation={0}
        />
      </SilkWrapper>

      <GradientOverlay />

      <ContentWrapper>
        <GradientText
          colors={['#0062ff', '#FF9FFC', '#00fbff']}
          animationSpeed={2}
          showBorder={false}
          className="hero-gradient-text"
        >
          Финансы под
          <br />
          контролем
        </GradientText>

        <ButtonGroup>
          <ButtonFilled size="large">Попробовать</ButtonFilled>
          <ButtonOutlined size="large">Узнать больше</ButtonOutlined>
        </ButtonGroup>

        <DashboardWrapper>
          <DashboardGlow />
          <ScreensCarousel />
        </DashboardWrapper>
      </ContentWrapper>
    </HeroSectionContainer>
  );
};
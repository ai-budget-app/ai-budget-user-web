import { StatCard } from '@/shared/ui/StatCard';
import { Button } from '@/shared/ui/Button';
import { Card, CardContent } from '@/shared/ui/Card';
import Aurora from '../Aurora/Aurora';
import GradientText from '../GradientText/GradientText';
import {
  HeroSectionContainer,
  AuroraWrapper,
  GradientOverlay,
  ContentWrapper,
  ButtonGroup,
  DashboardWrapper,
  DashboardGlow,
  StatsGrid,
  ChartContainer,
  ChartBar,
} from './styles';

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <AuroraWrapper>
        <Aurora colorStops={['#0055ff', '#5f96dd', '#00ccff']} amplitude={0.3} blend={0.5} />
      </AuroraWrapper>

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
          <Button variant="contained" color="primary" size="large">
            Попробовать
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Узнать больше
          </Button>
        </ButtonGroup>

        <DashboardPreview />
      </ContentWrapper>
    </HeroSectionContainer>
  );
};

const DashboardPreview = () => {
  const stats = [
    { label: 'Баланс', value: '₽124,500', change: '+12.5%', positive: true },
    { label: 'Доходы', value: '₽85,000', change: '+8.2%', positive: true },
    { label: 'Расходы', value: '₽42,300', change: '-3.1%', positive: false },
    { label: 'Накопления', value: '₽215,700', change: '+15.7%', positive: true },
  ];

  const chartData = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

  return (
    <DashboardWrapper>
      <DashboardGlow />
      <Card>
        <CardContent>
          <StatsGrid>
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </StatsGrid>
          <ChartContainer>
            {chartData.map((height, i) => (
              <ChartBar key={i} style={{ height: `${height}%` }} />
            ))}
          </ChartContainer>
        </CardContent>
      </Card>
    </DashboardWrapper>
  );
};
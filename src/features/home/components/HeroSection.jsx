import Aurora from '@/features/home/components/Aurora';
import { StatCard } from '@/shared/ui/StatCard';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import GradientText from './GradientText';

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen isolate">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Aurora colorStops={['#0055ff', '#5f96dd', '#00ccff']} amplitude={0.3} blend={0.5} />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/30 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative">
        <GradientText
          colors={['#0062ff', '#FF9FFC', '#00fbff']}
          animationSpeed={2}
          showBorder={false}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Финансы под
          <br />
          контролем
        </GradientText>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="text-base px-8 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
          >
            Попробовать
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 h-12 rounded-full backdrop-blur-sm"
          >
            Узнать больше
          </Button>
        </div>

        <DashboardPreview />
      </div>
    </section>
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
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl" />
      <Card className="relative rounded-2xl shadow-2xl backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="h-48 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl border border-border flex items-end justify-around p-4">
            {chartData.map((height, i) => (
              <div
                key={i}
                className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all hover:from-blue-600 hover:to-blue-500 cursor-pointer"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

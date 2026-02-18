import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { ChartIcon, ShieldIcon, WalletIcon } from '@/shared/ui/icons/Icons';
import { Section, SectionHeader } from '@/shared/ui/section';

const features = [
  {
    icon: WalletIcon,
    title: 'Учёт расходов',
    description: 'Автоматическая категоризация транзакций и детальная статистика.',
  },
  {
    icon: ChartIcon,
    title: 'Аналитика',
    description: 'Понятные графики и отчёты о ваших финансах.',
  },
  {
    icon: ShieldIcon,
    title: 'Безопасность',
    description: 'Банковский уровень защиты ваших данных.',
  },
];

export const FeaturesSection = () => {
  return (
    <Section id="features" className="bg-muted/30">
      <SectionHeader
        title="Всё для контроля финансов"
        description="Интуитивные инструменты для правильных финансовых решений"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="rounded-2xl hover:shadow-lg transition-shadow border-border"
          >
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

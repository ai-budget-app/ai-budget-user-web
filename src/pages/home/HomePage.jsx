import { CtaSection } from '@/features/home/components/CtaSection';
import { FeaturesSection } from '@/features/home/components/FeaturesSection';
import { HeroSection } from '@/features/home/components/HeroSection';
import { Footer } from '@/widgets/layout/Footer';
import { Header } from '@/widgets/layout/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

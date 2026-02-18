import { Button } from '@/shared/ui/button';
import { useEffect, useState } from 'react';

// Иконки
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const WalletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HomePage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-semibold text-xl">Zenny</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Возможности
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              О нас
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Войти
            </Button>
            <Button>Начать</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Новая версия 2.0 уже доступна
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Управляйте финансами
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              с умом
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Простой и интуитивный инструмент для контроля расходов, планирования бюджета и
            достижения финансовых целей.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="text-base px-8 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
            >
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 rounded-full">
              Узнать больше
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Баланс</p>
                  <p className="text-2xl font-bold">₽124,500</p>
                  <p className="text-xs text-green-500 mt-1">+12.5%</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Доходы</p>
                  <p className="text-2xl font-bold">₽85,000</p>
                  <p className="text-xs text-green-500 mt-1">+8.2%</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Расходы</p>
                  <p className="text-2xl font-bold">₽42,300</p>
                  <p className="text-xs text-red-500 mt-1">-3.1%</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Накопления</p>
                  <p className="text-2xl font-bold">₽215,700</p>
                  <p className="text-xs text-green-500 mt-1">+15.7%</p>
                </div>
              </div>

              <div className="h-48 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl border border-border flex items-end justify-around p-4">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div
                    key={i}
                    className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-md transition-all hover:from-blue-600 hover:to-blue-500"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Всё для контроля финансов</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Интуитивные инструменты для правильных финансовых решений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <WalletIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Учёт расходов</h3>
              <p className="text-muted-foreground">
                Автоматическая категоризация транзакций и детальная статистика.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <ChartIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Аналитика</h3>
              <p className="text-muted-foreground">Понятные графики и отчёты о ваших финансах.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <ShieldIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
              <p className="text-muted-foreground">Банковский уровень защиты ваших данных.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Присоединяйтесь к тысячам пользователей
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 h-12 text-base font-semibold"
              >
                Создать аккаунт бесплатно
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-semibold text-xl">Zenny</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>

          <p className="text-sm text-muted-foreground">© 2026 Zenny</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

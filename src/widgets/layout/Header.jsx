import { useTheme } from '@/shared/hooks/useTheme';
import { NavLink } from '@/shared/ui/NavLink';
import { Button } from '@/shared/ui/button';
import { MoonIcon, SunIcon } from '@/shared/ui/icons/Icons';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-lg">
        <div className="flex items-center gap-2 pl-2">
          <img src="/favicon-192x192.png" alt="Zenny" className="w-8 h-8" />
          <span className="font-semibold text-lg hidden sm:block">Zenny</span>
        </div>

        <nav className="hidden md:flex items-center gap-1 px-2">
          <NavLink href="#features">Возможности</NavLink>
          <NavLink href="#about">О нас</NavLink>
        </nav>

        <div className="hidden md:block w-px h-6 bg-border" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Button size="sm" className="rounded-full">
            Начать
          </Button>
        </div>
      </div>
    </header>
  );
};

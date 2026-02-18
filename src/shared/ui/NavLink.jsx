import { cn } from '@/lib/utils';

export const NavLink = ({ href, className, children, ...props }) => {
  return (
    <a
      href={href}
      className={cn(
        'px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

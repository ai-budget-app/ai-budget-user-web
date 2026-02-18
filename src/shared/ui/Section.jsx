import { cn } from '@/lib/utils';

export const Section = ({ id, className, children, ...props }) => {
  return (
    <section id={id} className={cn('py-20 px-6', className)} {...props}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export const SectionHeader = ({ title, description, className }) => {
  return (
    <div className={cn('text-center mb-16', className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};

import { cn } from '@/lib/utils';

export const StatCard = ({ label, value, change, positive, className }) => {
  return (
    <div
      className={cn(
        'bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-border',
        className
      )}
    >
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      {change && (
        <p className={cn('text-xs mt-1', positive ? 'text-green-500' : 'text-red-500')}>{change}</p>
      )}
    </div>
  );
};

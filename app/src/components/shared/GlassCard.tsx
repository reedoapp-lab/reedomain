import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  border?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = 'light',
  border = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl backdrop-blur-xl',
        variant === 'light' && 'bg-white/80',
        variant === 'dark' && 'bg-black/20',
        border && variant === 'light' && 'border border-white/50',
        border && variant === 'dark' && 'border border-white/10',
        className
      )}
    >
      {children}
    </div>
  );
}

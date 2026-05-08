import { cn } from '@/lib/utils';

interface MarqueeTrackProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
}

export function MarqueeTrack({
  children,
  className,
  speed = 30,
  pauseOnHover = true,
  direction = 'left',
}: MarqueeTrackProps) {
  return (
    <div
      className={cn(
        'flex overflow-hidden',
        pauseOnHover && 'group',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 gap-4',
          'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 gap-4',
          'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}

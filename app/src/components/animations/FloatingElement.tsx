import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className,
  amplitude = 10,
  duration = 4,
  delay = 0,
}: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.to(element, {
      y: -amplitude,
      duration: duration / 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay,
    });

    return () => {
      animation.kill();
    };
  }, [amplitude, duration, delay]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
}

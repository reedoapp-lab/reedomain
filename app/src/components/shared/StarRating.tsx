import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  className,
  interactive = false,
  onChange,
}: StarRatingProps) {
  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const filled = index < Math.floor(rating);
        const partial = index === Math.floor(rating) && rating % 1 !== 0;
        const partialWidth = partial ? (rating % 1) * 100 : 0;

        return (
          <button
            key={index}
            type="button"
            disabled={!interactive}
            onClick={() => handleClick(index)}
            className={cn(
              'relative',
              interactive && 'cursor-pointer hover:scale-110 transition-transform'
            )}
            style={{ width: size, height: size }}
          >
            {/* Background star (empty) */}
            <Star
              size={size}
              className="absolute text-gray-300"
              fill="currentColor"
            />
            
            {/* Filled star */}
            {(filled || partial) && (
              <div
                className="absolute overflow-hidden"
                style={{ width: filled ? '100%' : `${partialWidth}%` }}
              >
                <Star
                  size={size}
                  className="text-yellow-400"
                  fill="currentColor"
                />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

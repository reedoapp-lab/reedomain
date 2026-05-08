import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface LanguageSwitchProps {
  className?: string;
}

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-medium backdrop-blur-sm transition-all hover:bg-violet/20',
        className
      )}
    >
      <span
        className={cn(
          'transition-colors',
          currentLang === 'en' ? 'text-white' : 'text-white/60'
        )}
      >
        EN
      </span>
      <span className="text-white/40">|</span>
      <span
        className={cn(
          'transition-colors',
          currentLang === 'pl' ? 'text-white' : 'text-white/60'
        )}
      >
        PL
      </span>
    </button>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, Wrench, Zap, Monitor } from 'lucide-react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { useMousePosition } from '@/hooks/useMousePosition';

export function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const mousePosition = useMousePosition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(
        searchRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.7 }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!imageRef.current) return;

    const rotateX = mousePosition.normalizedY * -5;
    const rotateY = mousePosition.normalizedX * 5;

    gsap.to(imageRef.current, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [mousePosition]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const popularServices = [
    { icon: Sparkles, label: t('services.cleaning') },
    { icon: Wrench, label: t('services.plumbing') },
    { icon: Zap, label: t('services.electrical') },
    { icon: Monitor, label: t('services.itSupport') },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            {/* 🇵🇱 Quote */}
            <p className="mb-4 text-sm italic text-gray-500">
              🇵🇱 Made in Poland, for the people of Poland
            </p>

            <h1
              ref={titleRef}
              className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl"
            >
              Stop Looking for Help. 
              Start Booking It.
            </h1>

            <p
              ref={subtitleRef}
              className="mt-6 text-lg text-gray-500 sm:text-xl"
            >
              Not just another crowded marketplace - Reedo uses AI to understand your needs and connect you with reliable help, instantly.
            </p>

            {/* SEARCH */}
            <div ref={searchRef} className="mt-10">
              <form onSubmit={handleSearch}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder={t('hero.searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-14 pl-12 text-base rounded-xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] focus:border-[#5B3DF5]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
                  >
                    {t('hero.searchButton')}
                  </Button>
                </div>
              </form>

              {/* Popular */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-500">
                  {t('hero.popularServices')}
                </span>

                {popularServices.map((service) => (
                  <button
                    key={service.label}
                    onClick={() => setSearchQuery(service.label)}
                    className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-all hover:bg-[#5B3DF5]/10 hover:text-[#5B3DF5]"
                  >
                    <service.icon className="h-3.5 w-3.5" />
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
  <div className="hidden items-center justify-center lg:flex">
  <FloatingElement amplitude={10} duration={5}>
    <div
      ref={imageRef}
      className="relative"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <img
        src="/images/1st.png"
        alt="Service illustration"
        className="h-auto w-full max-w-lg bg-transparent object-contain"
      />
    </div>
  </FloatingElement>
</div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
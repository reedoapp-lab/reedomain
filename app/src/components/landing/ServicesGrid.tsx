import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Wrench,
  Zap,
  Monitor,
  Flower2,
  Paintbrush,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { useInView } from '@/hooks/useInView';
import type { ServiceType } from '@/types';

const services: {
  id: ServiceType;
  icon: React.ElementType;
  title: string;
  description: string;
}[] = [
  {
    id: 'cleaning',
    icon: Sparkles,
    title: 'Home Cleaning',
    description: 'Professional home and apartment cleaning services on demand.',
  },
  {
    id: 'plumbing',
    icon: Wrench,
    title: 'Plumbing',
    description: 'Fast and reliable help for leaks, repairs, and installations.',
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical Services',
    description: 'Certified electricians for repairs, fittings, and urgent issues.',
  },
  {
    id: 'it_support',
    icon: Monitor,
    title: 'Tech Support',
    description: 'Get help with WiFi, computers, smart devices, and software issues.',
  },
  {
    id: 'gardening',
    icon: Flower2,
    title: 'Gardening',
    description: 'Lawn care, garden maintenance, and outdoor cleaning services.',
  },
  {
    id: 'painting',
    icon: Paintbrush,
    title: 'Painting',
    description: 'Interior and exterior painting services with professional finishing.',
  },
  {
    id: 'moving',
    icon: Truck,
    title: 'Handyman & Moving',
    description:
      'Furniture assembly, moving help, mounting, packing, and home assistance.',
  },
];

export function ServicesGrid() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [sectionRef, isInView] = useInView<HTMLElement>({
    threshold: 0.2,
  });

  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.service-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }
    );
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-white py-24"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold text-black sm:text-4xl">
            {t('services.title')}
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <Card
              key={service.id}
              onClick={() =>
                navigate(`/services?category=${service.id}`)
              }
              className="service-card group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-[#5B3DF5]/10">
                <service.icon className="h-6 w-6 text-gray-700 transition-colors group-hover:text-[#5B3DF5]" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-black transition-transform duration-200 group-hover:scale-[1.03]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-4 flex items-center text-sm font-medium text-[#5B3DF5] opacity-0 transition-all duration-200 group-hover:opacity-100">
                {t('services.viewAll')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
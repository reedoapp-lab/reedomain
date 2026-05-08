import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    image: '/images/hw1.png',
    title: 'Submit a Request',
    desc: 'Tell us what you need in a few simple steps.',
  },
  {
    number: '02',
    image: '/images/hw2.png',
    title: 'Smart Matching',
    desc: 'Our AI matches you with the best available professionals near you.',
  },
  {
    number: '03',
    image: '/images/hw3.png',
    title: 'Professional Service',
    desc: 'A verified expert arrives to handle your request efficiently.',
  },
  {
    number: '04',
    image: '/images/hw4.png',
    title: 'Enjoy the Results',
    desc: 'Sit back and enjoy high-quality, reliable service.',
  },
];

export function HowItWorks() {
  const navigate = useNavigate();
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView || !stepsRef.current) return;

    const cards = stepsRef.current.querySelectorAll('.step-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative bg-white py-24">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-black sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get things done in four simple steps
          </p>
        </div>

        {/* Grid */}
        <div ref={stepsRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="step-card text-center">

              <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#5B3DF5]/10 text-sm font-semibold text-[#5B3DF5]">
                {step.number}
              </div>

              <div className="mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto h-32 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>

              <h3 className="text-lg font-semibold text-black">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            onClick={() => navigate('/how-it-works')}
            className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
          >
            Learn More About How It Works
          </Button>
        </div>

      </div>
    </section>
  );
}
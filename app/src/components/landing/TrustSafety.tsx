import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';


export function TrustSafety() {
  const navigate = useNavigate();
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.trust-card');

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

  const features = [
    {
      image: '/images/49.png',
      title: 'Verified Professionals',
      desc: 'We onboard only trusted professionals verified with government IDs.',
    },
    {
      image: '/images/50.png',
      title: '24/7 Dispute Support',
      desc: 'Our team is available via call and chat to resolve any issues quickly.',
    },
    {
      image: '/images/51.png',
      title: 'Secure Payments',
      desc: 'Payments are released only after the job is completed and approved.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-white py-24">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-black sm:text-4xl">
            Trust & Safety
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Built to keep every interaction secure, reliable, and stress-free
          </p>
        </div>

        {/* Grid */}
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="trust-card text-center rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mx-auto h-32 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>

              <h3 className="text-lg font-semibold text-black">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            onClick={() => navigate('/trust-safety')}
            className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
          >
            Learn More About Trust & Safety
          </Button>
        </div>

      </div>
    </section>
  );
}
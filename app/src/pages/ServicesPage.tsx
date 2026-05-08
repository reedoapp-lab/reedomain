import { MainLayout } from '@/components/layout/MainLayout';
import { Sparkles, Wrench, Zap, Monitor, Settings } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      image: '/images/service1.png', // replace later
      title: 'Cleaning Services',
      desc: 'Professional cleaning solutions for homes and offices. From deep cleaning to regular maintenance, our verified cleaners ensure spotless results with attention to detail and reliability you can trust.',
    },
    {
      icon: Wrench,
      image: '/images/service2.png',
      title: 'Plumbing Services',
      desc: 'From fixing leaks to full installations, our skilled plumbers handle all types of plumbing issues efficiently. Expect timely service, quality workmanship, and long-lasting solutions.',
    },
    {
      icon: Settings,
      image: '/images/service3.png',
      title: 'Handyman Services',
      desc: 'Whether it’s assembling furniture, fixing appliances, or moving and packing, our multi-skilled professionals are ready to help with everyday tasks quickly and efficiently.',
    },
    {
      icon: Monitor,
      image: '/images/service4.png',
      title: 'IT Support',
      desc: 'Get expert assistance for all your technical needs—from troubleshooting and setup to ongoing support. Our IT professionals ensure your devices and systems run smoothly.',
    },
    {
      icon: Zap,
      image: '/images/service5.png',
      title: 'Electrical Services',
      desc: 'Safe and reliable electrical services for repairs, installations, and maintenance. Our certified electricians ensure everything is handled with precision and safety compliance.',
    },
  ];

  return (
    <MainLayout>
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-semibold text-black">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Explore a wide range of trusted services delivered by verified professionals, designed to make everyday tasks simple and hassle-free.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-24">

            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse items-center gap-10 md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5B3DF5]/10">
                    <service.icon className="h-6 w-6 text-[#5B3DF5]" />
                  </div>

                  <h2 className="text-2xl font-semibold text-black">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-w-md mx-auto object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                  />
                </div>
              </div>
            ))}

          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
            <button
              onClick={() => window.location.href = '/services'}
              className="bg-[#5B3DF5] hover:bg-[#4c32d9] text-white px-7 py-3.5 rounded-xl shadow-[0_12px_30px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
            >
              Browse All Services
            </button>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
import { MainLayout } from '@/components/layout/MainLayout';
import { ShieldCheck, UserCheck, Headphones } from 'lucide-react';

export default function TrustSafetyPage() {
  const sections = [
    {
      icon: UserCheck,
      image: '/images/49.png',
      title: 'Verified Professionals',
      desc: 'Every professional on our platform is carefully vetted and verified using government-issued identification. We ensure that only trusted, qualified individuals are allowed to provide services, giving you complete peace of mind.',
    },
    {
      icon: Headphones,
      image: '/images/50.png',
      title: '24/7 Support & Dispute Resolution',
      desc: 'If anything doesn’t go as expected, our dedicated support team is available around the clock. Whether through chat or phone, we actively step in to resolve issues quickly and fairly.',
    },
    {
      icon: ShieldCheck,
      image: '/images/51.png',
      title: 'Secure Payments',
      desc: 'Your payments are fully protected. Funds are only released once the service is successfully completed and approved, ensuring fairness and accountability for both sides.',
    },
  ];

  return (
    <MainLayout>
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-semibold text-black">
              Trust & Safety
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We’ve built our platform to ensure every interaction is safe, secure, and reliable—from booking to completion.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-24">

            {sections.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse items-center gap-10 md:flex-row ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5B3DF5]/10">
                    <item.icon className="h-6 w-6 text-[#5B3DF5]" />
                  </div>

                  <h2 className="text-2xl font-semibold text-black">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-0 mx-auto object-contain rounded-1 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                  />
                </div>
              </div>
            ))}

          </div>

          {/* Bottom Trust Block */}
          <div className="mt-24 rounded-xl border border-gray-200 p-10 text-center">
            <h3 className="text-xl font-semibold text-black">
              Built for Confidence
            </h3>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              From verified professionals to secure payments and responsive support, every part of our platform is designed to give you confidence when booking services.
            </p>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
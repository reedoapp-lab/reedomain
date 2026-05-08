import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  ShieldCheck,
  CreditCard,
  UserCheck,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HelpCenterPage() {
  const navigate = useNavigate();

  const helpItems = [
    {
      icon: UserCheck,
      title: 'Account & Verification',
      desc: 'Get help with creating accounts, provider verification, profile setup, and identity checks.',
    },
    {
      icon: CreditCard,
      title: 'Payments & Refunds',
      desc: 'Learn about payment security, refunds, payment releases, and transaction support.',
    },
    {
      icon: ShieldCheck,
      title: 'Trust & Safety',
      desc: 'Read about how Reedo verifies professionals and protects both customers and providers.',
    },
    {
      icon: MessageCircle,
      title: 'Bookings & Support',
      desc: 'Need help with bookings, cancellations, disputes, or urgent support? We are here to help.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
              Reedo Support Center
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
              Help Center
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Need help with bookings, payments, provider applications,
              verification, or platform support? Reedo is building a modern
              support experience for both customers and professionals.
            </p>
          </div>

          {/* IMAGE */}
          <div className="mt-16 flex justify-center">
            <img
              src="/images/help.png"
              alt="Help Center"
              className="w-70 max-w-3xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* HELP CARDS */}
      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              How Can We Help?
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Everything you need to know about using Reedo safely and smoothly.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B3DF5]/10">
                  <item.icon className="h-7 w-7 text-[#5B3DF5]" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-14 space-y-6">

            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-black">
                How does provider verification work?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Professionals joining Reedo may be asked to submit government
                identification and additional verification documents before
                becoming active on the platform.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-black">
                When are payments released?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Payments are typically released after the work is completed and
                confirmed successfully by the customer.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-black">
                Can foreigners use Reedo easily?
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Yes. Reedo is being designed to make services more accessible
                for foreigners, expats, students, and English-speaking users
                living in Poland.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#5B3DF5]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-4xl font-semibold text-white">
            Still Need Help?
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Our support experience is continuously evolving to make Reedo
            simpler, safer, and more reliable for everyone.
          </p>

          <div className="mt-10">
            <Button
              onClick={() => navigate('/signup')}
              className="bg-white px-8 py-6 font-semibold text-black hover:bg-gray-100 rounded-xl"
            >
              Contact Reedo Support
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
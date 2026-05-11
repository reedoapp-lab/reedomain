import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  BadgeCheck,
  Wallet,
  Clock3,
  Users,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function JoinProfessionals() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Wallet,
      title: 'Increase Your Income',
      desc: 'Reach more customers consistently and grow your monthly earnings with high-quality service requests.',
    },
    {
      icon: Clock3,
      title: 'Flexible Work',
      desc: 'Choose your own schedule, accept jobs on your terms, and work when it suits you best.',
    },
    {
      icon: Users,
      title: 'More Customers',
      desc: 'Get discovered by locals, expats, students, families, and professionals across Poland.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Platform',
      desc: 'Verified customers, secure payments, and dedicated support help you focus on your work.',
    },
  ];

  const professions = [
    'Cleaners',
    'Plumbers',
    'Electricians',
    'IT Support Specialists',
    'Handymen',
    'Movers & Packers',
    'Assemblers',
    'Painters',
    'Home Repair Experts',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
                <Sparkles className="h-4 w-4" />
                Join the future of services in Poland 🇵🇱
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
                Join Reedo As A
                <span className="text-[#5B3DF5]"> Professional</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reedo is building a smarter and faster way for people across
                Poland to find trusted professionals.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are looking for cleaners, plumbers, electricians,
                technicians, movers, handymen, and skilled professionals ready
                to grow with us and become part of a new generation of services.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Early professionals joining Reedo could potentially increase
                their visibility, bookings, and earnings significantly through
                AI-powered matching and better customer access.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/signup')}
className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"                >
                  Apply as Provider
                </Button>
    
                <Button
                  variant="outline"
                  onClick={() => navigate('/why-reedo')}
                  className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
                >
                  Learn About Reedo
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/53.png"
                alt="Join Reedo"
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              Why Professionals Are Joining Reedo
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Built to help skilled workers grow faster, earn more,
              and access better opportunities.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#5B3DF5]/10">
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

      {/* PROFESSIONS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* IMAGE */}
            <div>
              <img
                src="/images/54.png"
                alt="Professionals"
                className="w-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-4xl font-semibold leading-tight text-black">
                Who Can Join Reedo?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are onboarding motivated professionals from different service
                industries across Poland.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {professions.map((profession, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#faf8ff] px-4 py-4"
                  >
                    <BadgeCheck className="h-5 w-5 text-[#5B3DF5]" />
                    <span className="font-medium text-gray-800">
                      {profession}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFICATION */}
      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-4xl font-semibold text-black">
            Verification & Quality Assessment
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            To maintain trust and safety on Reedo, every professional applying
            through the provider signup process will later go through identity
            verification and profile assessment by our team.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            This helps customers feel safer while also building a high-quality
            network of reliable professionals across Poland.
          </p>

          <div className="mt-10">
            <Button
              onClick={() => navigate('/signup')}
              className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"          
            >
              Continue to Provider Signup
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#5B3DF5]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-white">
            Be Part Of The Service Revolution
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Reedo is not just another marketplace.
            We are building the future of trusted services in Poland —
            powered by technology, AI, and people who care about quality work.
          </p>

          <div className="mt-10">
            <Button
              onClick={() => navigate('/signup')}
              className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
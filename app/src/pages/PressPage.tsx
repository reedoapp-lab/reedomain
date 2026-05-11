import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Newspaper,
  Globe2,
  Sparkles,
  ShieldCheck,
  Mail,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PressPage() {
  const navigate = useNavigate();

  const highlights = [
    {
      title: 'AI-Powered Matchmaking',
      desc:
        'Reedo intelligently connects users with the most suitable professionals based on urgency, location, language, and availability.',
      icon: Sparkles,
    },
    {
      title: 'Built For Poland',
      desc:
        'Created for modern life in Poland — helping locals, expats, students, and professionals access reliable services instantly.',
      icon: Globe2,
    },
    {
      title: 'Trust & Safety',
      desc:
        'Verified providers, secure payments, and support systems help create a safer and more transparent experience.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
                <Newspaper className="h-4 w-4" />
                Reedo Press & Media
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
                Reimagining
                <span className="text-[#5B3DF5]"> Local Services </span>
                In Poland
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reedo is an AI-powered platform built to simplify how people
                discover and book trusted professionals across Poland.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                From cleaners and electricians to emergency home support,
                Reedo modernizes an industry that still depends heavily on
                random contacts, social media groups, and outdated listings.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/signup')}
className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"                  >
                  Join Reedo
                
                </Button>

                <Button
                  variant="outline"
                  className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
                >
                  Contact Media
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/56.png"
                alt="Reedo Press"
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              About Reedo
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              Reedo was created to solve one of the most frustrating
              everyday problems in modern cities:
              finding reliable local help quickly and safely.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              Millions of people across Poland struggle with language barriers,
              unreliable providers, delayed responses, and unverified contacts.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              Why Reedo Matters
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#5B3DF5]/10">
                  <item.icon className="h-7 w-7 text-[#5B3DF5]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS CONTACT */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#5B3DF5]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h2 className="mt-8 text-4xl font-semibold text-white">
            Press & Media Inquiries
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            For interviews, partnerships, media requests,
            or collaborations, contact the Reedo team.
          </p>

          <div className="mt-10">
            <Button className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]">
              press@reedo.pl
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
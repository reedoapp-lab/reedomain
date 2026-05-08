import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Code2,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CareersPage() {
  const navigate = useNavigate();

  const positions = [
    {
      title: 'Frontend Developers',
      desc:
        'React, TypeScript, TailwindCSS, and UI engineers to build beautiful and scalable experiences.',
      icon: Code2,
    },
    {
      title: 'Backend & AI Engineers',
      desc:
        'Develop intelligent matchmaking systems, APIs, infrastructure, and AI-powered workflows.',
      icon: BrainCircuit,
    },
    {
      title: 'Security & Platform Engineers',
      desc:
        'Help us build secure systems, payment protection, authentication, and scalable cloud infrastructure.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
                <Briefcase className="h-4 w-4" />
                Careers at Reedo
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
                Build The Future Of
                <span className="text-[#5B3DF5]"> Local Services </span>
                In Poland
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Reedo is building an AI-powered platform designed to modernize
                how people discover and book trusted professionals across Poland.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                We are looking for passionate developers, engineers, designers,
                and technical professionals who want to work on meaningful,
                real-world problems and help scale the future of local services.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/signup')}
className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"                   >
                  Join Reedo
                
                </Button>

                <Button
                  variant="outline"
                  className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
                >
                  Send Your CV
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/58.png"
                alt="Reedo Careers"
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              Who We’re Looking For
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Join a fast-growing platform focused on AI, trust, and modern user experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {positions.map((item, index) => (
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

      {/* WHY JOIN */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <img
                src="/images/61.png"
                alt="Work with Reedo"
                className="w-full max-w-xl object-contain"
              />
            </div>

            <div>
              <h2 className="text-4xl font-semibold leading-tight text-black">
                Work On Something That Actually Matters
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reedo is solving real-life problems faced by millions of people
                across Poland — from language barriers to unreliable services
                and difficult booking experiences.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We believe modern AI and technology can create a faster,
                safer, and more human platform for both customers and professionals.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                If you’re passionate about startups, AI, scalable systems,
                and meaningful products — we’d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#5B3DF5]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h2 className="mt-8 text-4xl font-semibold text-white">
            Send Your CV
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            We are actively hiring talented IT professionals,
            developers, engineers, and technical specialists.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/80">
            Send your CV, portfolio, or LinkedIn profile to:
          </p>

          <div className="mt-10">
            <Button className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]">
              careers@reedo.pl
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  BrainCircuit,
  MapPinned,
  Clock3,
  ShieldCheck,
  Sparkles,
  Zap,
  Languages,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReedoAiPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: BrainCircuit,
      title: 'AI-Powered Understanding',
      desc:
        'Reedo AI understands the actual problem behind every request instead of simply matching keywords.',
    },
    {
      icon: MapPinned,
      title: 'Smart Local Matching',
      desc:
        'The system connects users with nearby professionals based on availability, distance, urgency, and ratings.',
    },
    {
      icon: Languages,
      title: 'Built For Modern Poland',
      desc:
        'Designed for locals, expats, students, and busy professionals living across Poland.',
    },
    {
      icon: Clock3,
      title: 'Real-Time Availability',
      desc:
        'Users instantly discover professionals who are available right now without endless searching.',
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Safer Experiences',
      desc:
        'Smarter filtering and verification improve trust between customers and providers.',
    },
    {
      icon: Zap,
      title: 'Faster Emergency Help',
      desc:
        'Urgent requests can be routed much faster through intelligent prioritization.',
    },
    {
      icon: Sparkles,
      title: 'Personalized Recommendations',
      desc:
        'Reedo AI continuously improves recommendations using behavior and booking patterns.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
                <Sparkles className="h-4 w-4" />
                The Intelligence Behind Reedo
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
                Reedo AI
                <span className="block text-[#5B3DF5]">
                  Powerful Matchmaking For Real Problems
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Reedo is not just another marketplace. Our AI-powered system is
                designed to understand problems deeply and connect people with
                the right professionals faster and more reliably.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                From urgent plumbing emergencies to trusted cleaners and
                electricians, Reedo AI analyzes requests, urgency, availability,
                and location in real time.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('/signup')}
className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"                            >
                  Join Reedo Early
                 
                </Button>

                <Button
                  variant="outline"
                  onClick={() => navigate('/why-reedo')}
                               className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"

                >
                  Why Reedo?
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/ai.png"
                alt="Reedo AI"
                className="w-full max-w-xl object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#faf8ff] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              How Reedo AI Works
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Intelligent systems designed to simplify everyday services.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B3DF5]/10">
                  <feature.icon className="h-7 w-7 text-[#5B3DF5]" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-black">
                  {feature.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* IMAGE */}
            <div>
              <img
                src="/images/55.png"
                alt="AI Benefits"
                className="w-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-4xl font-semibold leading-tight text-black">
                Smarter Than Traditional Service Platforms
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Traditional marketplaces often leave users endlessly scrolling,
                comparing providers manually, and waiting for responses.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reedo AI changes this experience by intelligently guiding users
                toward the best match instantly.
              </p>

              <div className="mt-10 space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 p-6"
                  >
                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5B3DF5]/10">
                        <benefit.icon className="h-6 w-6 text-[#5B3DF5]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-black">
                          {benefit.title}
                        </h3>

                        <p className="mt-3 text-lg leading-7 text-gray-600">
                          {benefit.desc}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#5B3DF5]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-white">
            The Future Of Local Services Is Intelligent
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Reedo AI is built to transform how people across Poland find,
            trust, and book professionals.
          </p>

          <div className="mt-10">
            <Button
              onClick={() => navigate('/signup')}
              className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
            >
              Experience Reedo AI
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
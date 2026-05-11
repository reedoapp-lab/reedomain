import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, ShieldCheck, Globe2, Clock3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WhyReedo() {
  const navigate = useNavigate();

  const challenges = [
    {
      title: 'Language Barriers',
      desc: 'Many foreigners and expats in Poland struggle to explain urgent household problems to local service providers due to communication gaps.',
      icon: Globe2,
    },
    {
      title: 'No Trusted Contacts',
      desc: 'Finding a reliable cleaner, plumber, or technician quickly often depends on random Facebook groups, personal references, or luck.',
      icon: ShieldCheck,
    },
    {
      title: 'Slow & Stressful Process',
      desc: 'When emergencies happen, people waste hours searching, calling, translating, and comparing providers manually.',
      icon: Clock3,
    },
  ];

  const solutions = [
    {
      title: 'AI-Powered Matching',
      desc: 'Reedo listens to the actual problem, location, urgency, and availability to instantly connect users with the right professional.',
    },
    {
      title: 'Built for Modern Poland',
      desc: 'Designed for locals, expats, students, and working professionals who need fast, reliable services without confusion.',
    },
    {
      title: 'Trust & Safety First',
      desc: 'Verified professionals, secure payments, and dispute support create a safer experience for both customers and workers.',
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
                <Sparkles className="h-4 w-4" />
                Made in Poland 🇵🇱 for modern everyday living
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-black sm:text-6xl">
                Why
                <span className="text-[#5B3DF5]"> Reedo </span>
                Exists
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Poland is changing rapidly. Millions of foreigners, expats,
                students, and busy professionals now live across cities like
                Warsaw, Gdańsk, Kraków, Łódź, and Wrocław - but finding trusted
                local services is still surprisingly difficult.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Reedo was created to solve a real-world problem:
                making everyday services simple, trustworthy, and accessible
                using modern technology and AI-powered support.
              </p>

              <div className="mt-10">
                <Button
                  onClick={() => navigate('/signup')}
                              className="h-14 px-8 text-base font-semibold rounded-xl bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
                >
                  Join Early Access
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
<div className="flex justify-center">
  <img
    src="/images/expat.png"
    alt="Why Reedo"
    className="w-full max-w-xl object-contain drop-shadow-[0_25px_60px_rgba(91,61,245,0.15)]"
  />
</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-[#faf8ff]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              The Problem Is Bigger Than It Looks
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Poland’s growing international population and urban lifestyle are
              increasing demand for fast and reliable home services.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-[#5B3DF5]">1M+</h3>
              <p className="mt-4 text-gray-700">
                Foreign workers are currently employed across Poland.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-[#5B3DF5]">2.5M</h3>
              <p className="mt-4 text-gray-700">
                Foreign residents are estimated to be living in Poland today,
                creating growing demand for accessible local services.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-[#5B3DF5]">24/7</h3>
              <p className="mt-4 text-gray-700">
                Service emergencies don’t wait — plumbing leaks, electrical
                failures, moving help, and urgent repairs happen every day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LANGUAGE BARRIER */}
      <section className="py-24 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div>
            <img
              src="/images/lang.png"
              alt="Foreigners in Poland"
               className="w-full max-w-xl object-contain drop-shadow-[0_25px_60px_rgba(91,61,245,0.15)]"
            />
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight text-black">
              Language Shouldn’t Stop Someone From Getting Help
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              For many foreigners living in Poland, even simple tasks like
              finding a plumber or cleaner can become stressful due to language
              barriers and trust issues.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discussions from expat communities in Warsaw frequently highlight
              difficulties communicating with local services, especially during
              urgent situations.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Several cleaning and service businesses in Warsaw now openly
              advertise “English-speaking” support because demand has grown so
              significantly among foreigners and international residents.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-24 bg-[#faf8ff]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              What Reedo Solves
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {challenges.map((item, index) => (
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

      {/* SOLUTION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-4xl font-semibold text-black">
              How Reedo Changes The Game
            </h2>
          </div>

          <div className="mt-14 space-y-8">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#5B3DF5]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-white">
            Poland Needs A Smarter Service Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Reedo is building a faster, more trusted, and more human way
            to connect people with reliable professionals - powered by AI
            and designed for modern life in Poland.
          </p>

          <div className="mt-10">
            <Button
              onClick={() => navigate('/signup')}
            
             className="h-14 px-8 text-base font-semibold rounded-xl bg-white hover:bg-grey text-black shadow-[0_10px_25px_rgba(91,61,245,0.3)] transition-all duration-200 hover:-translate-y-[1px]"

            >
              Get Started with Reedo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function Blog() {

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">

      {/* NAVIGATION */}
      <Navigation />

      {/* HERO */}
      <section className="relative border-b border-gray-100 bg-gradient-to-b from-[#f7f3ff] via-white to-[#fffaf7] px-6 pb-28 pt-40">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-0 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/15 blur-[140px]" />

          <div className="absolute right-0 top-20 h-[240px] w-[240px] rounded-full bg-orange-200/30 blur-[120px]" />

          <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-[#5B3DF5]/10 blur-[120px]" />

        </div>

        <div className="relative mx-auto max-w-6xl">

          {/* TAG */}
          <div className="inline-flex items-center rounded-full border border-[#5B3DF5]/15 bg-white/70 px-5 py-2 text-sm font-medium text-[#5B3DF5] backdrop-blur-xl">

            Reedo Insights

          </div>

          {/* TITLE */}
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-tight tracking-tight text-black sm:text-6xl">

            The Future Of Smart Services
            <span className="block bg-gradient-to-r from-[#5B3DF5] to-[#7c5cff] bg-clip-text text-transparent">

              Starts With Simplicity

            </span>

          </h1>

          {/* SUBTITLE */}
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">

            Reedo is building an AI-powered platform
            designed to simplify how people discover,
            book, and manage trusted services in Poland.

          </p>

          {/* META */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-gray-500">

            <span>By Reedo Team</span>

            <span>•</span>

            <span>Technology & Services</span>

            <span>•</span>

            <span>2026</span>

          </div>

        </div>
      </section>

      {/* MAIN */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          {/* FEATURE BLOCK */}
          <div className="rounded-[36px] border border-[#5B3DF5]/10 bg-gradient-to-br from-[#faf7ff] via-white to-[#fff7f2] p-12 shadow-[0_25px_80px_rgba(91,61,245,0.08)]">

            <div className="max-w-4xl">

              <div className="inline-flex items-center rounded-full border border-[#5B3DF5]/15 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">

                Reedo Vision

              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-black">

                Reimagining Everyday Services
                Through AI, Simplicity,
                And Trust

              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">

                Reedo is building a modern ecosystem where discovering,
                booking, and managing trusted professionals becomes
                seamless, intelligent, and accessible for everyone.

              </p>

            </div>

          </div>

          {/* CONTENT GRID */}
          <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_320px]">

            {/* ARTICLE */}
            <article>

              <div className="space-y-8 text-lg leading-9 text-gray-600">

                <p>

                  Modern life moves fast.

                  People expect services to be accessible,
                  transparent, and simple — yet booking
                  trusted help can still feel outdated,
                  confusing, and time-consuming.

                </p>

                <p>

                  Whether someone needs a cleaner,
                  electrician, plumber, or technical support,
                  finding reliable professionals often involves
                  uncertainty, communication barriers,
                  and inconsistent experiences.

                </p>

              </div>

              {/* SECTION */}
              <div className="mt-20">

                <h2 className="text-4xl font-semibold tracking-tight text-black">

                  Why Reedo Exists

                </h2>

                <div className="mt-8 space-y-8 text-lg leading-9 text-gray-600">

                  <p>

                    Reedo was created to simplify how people
                    access services through a smarter,
                    AI-powered experience.

                  </p>

                  <p>

                    Instead of spending hours searching through
                    listings or making endless calls,
                    users can simply explain what they need —
                    and Reedo intelligently guides them
                    toward the right solution.

                  </p>

                  <p>

                    The goal is not only convenience,
                    but trust, clarity, and speed.

                  </p>

                </div>

              </div>

              {/* HIGHLIGHT */}
              <div className="mt-20 rounded-[36px] border border-[#5B3DF5]/10 bg-gradient-to-br from-[#faf7ff] to-white p-10 shadow-[0_20px_60px_rgba(91,61,245,0.06)]">

                <h3 className="text-3xl font-semibold text-black">

                  What Makes Reedo Different

                </h3>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">

                  {[
                    {
                      title: 'AI-Powered Matching',
                      text:
                        'Smarter service discovery based on user needs.',
                    },
                    {
                      title: 'Faster Booking',
                      text:
                        'Simplified workflows designed for speed.',
                    },
                    {
                      title: 'Modern Experience',
                      text:
                        'Clean, intuitive, and accessible interface.',
                    },
                    {
                      title: 'Trusted Ecosystem',
                      text:
                        'Focused on reliability and transparency.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white bg-white p-7 shadow-sm"
                    >

                      <h4 className="text-xl font-semibold text-black">

                        {item.title}

                      </h4>

                      <p className="mt-4 leading-8 text-gray-600">

                        {item.text}

                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* SECTION */}
              <div className="mt-20">

                <h2 className="text-4xl font-semibold tracking-tight text-black">

                  Built Around Real Problems

                </h2>

                <div className="mt-8 space-y-8 text-lg leading-9 text-gray-600">

                  <p>

                    One of Reedo’s biggest priorities
                    is listening to real users.

                  </p>

                  <p>

                    Through validation programs,
                    feedback surveys, and early community input,
                    the platform is being shaped around
                    actual pain points experienced in everyday life.

                  </p>

                  <p>

                    This allows Reedo to evolve
                    based on real-world needs —
                    not assumptions.

                  </p>

                </div>

              </div>

              {/* QUOTE */}
              <div className="mt-20 rounded-[36px] border border-[#5B3DF5]/10 bg-gradient-to-br from-[#faf7ff] via-white to-[#fffaf7] p-12 shadow-[0_25px_80px_rgba(91,61,245,0.08)]">

                <p className="text-3xl font-semibold leading-relaxed tracking-tight text-black">

                  “Technology should remove friction
                  from everyday life —
                  not create more complexity.”

                </p>

                <p className="mt-6 text-gray-500">

                  — Reedo Vision

                </p>

              </div>

              {/* FINAL SECTION */}
              <div className="mt-20">

                <h2 className="text-4xl font-semibold tracking-tight text-black">

                  Looking Ahead

                </h2>

                <div className="mt-8 space-y-8 text-lg leading-9 text-gray-600">

                  <p>

                    Reedo is still early in its journey,
                    but the long-term vision is ambitious.

                  </p>

                  <p>

                    The platform aims to combine:

                  </p>

                  <ul className="space-y-4 pl-4 text-gray-700">

                    <li>• AI-powered assistance</li>

                    <li>• Seamless booking experiences</li>

                    <li>• Trusted professionals</li>

                    <li>• Intelligent recommendations</li>

                    <li>• Modern service infrastructure</li>

                  </ul>

                  <p>

                    Ultimately, the mission is simple:
                    make accessing services easier for everyone.

                  </p>

                </div>

              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="space-y-8">

              {/* CARD */}
              <div className="rounded-[32px] border border-[#5B3DF5]/10 bg-white p-8 shadow-[0_15px_50px_rgba(91,61,245,0.06)]">

                <p className="text-sm font-medium uppercase tracking-wider text-[#5B3DF5]">

                  Reedo Mission

                </p>

                <h3 className="mt-4 text-3xl font-semibold leading-tight text-black">

                  Smarter Services.
                  Simpler Living.

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  Reedo combines AI,
                  trust, and modern design
                  to improve how people access services.

                </p>

              </div>

              {/* CARD */}
              <div className="rounded-[32px] border border-gray-100 bg-gradient-to-br from-white to-[#faf7ff] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

                <h3 className="text-2xl font-semibold text-black">

                  Explore Reedo

                </h3>

                <p className="mt-4 leading-8 text-gray-600">

                  Learn more about the vision,
                  services, and future roadmap.

                </p>

                <div className="mt-8 flex flex-col gap-4">

                  <a
                    href="/why-reedo"
                    className="rounded-2xl bg-[#5B3DF5] px-6 py-4 text-center text-white shadow-[0_12px_35px_rgba(91,61,245,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#4c32d9]"
                  >

                    About Reedo

                  </a>

                  <a
                    href="/services"
                    className="rounded-2xl border border-gray-200 bg-white px-6 py-4 text-center text-gray-700 transition-all hover:border-[#5B3DF5] hover:text-[#5B3DF5]"
                  >

                    Browse Services

                  </a>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gray-100 bg-gradient-to-b from-[#faf7ff] via-white to-[#fffaf7] px-6 py-24">

        {/* GLOW */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-[120px]" />

        </div>

        <div className="relative mx-auto max-w-5xl text-center">

          <h2 className="text-5xl font-semibold tracking-tight text-black">

            Building The Future Of
            <span className="block bg-gradient-to-r from-[#5B3DF5] to-[#7c5cff] bg-clip-text text-transparent">

              Smart Services

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">

            Reedo is creating a modern ecosystem
            where discovering and booking trusted
            services becomes effortless.

          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="/services"
              className="rounded-2xl bg-[#5B3DF5] px-8 py-4 text-white shadow-[0_15px_40px_rgba(91,61,245,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#4c32d9]"
            >

              Explore Services

            </a>

            <a
              href="/validation"
              className="rounded-2xl border border-gray-200 bg-white px-8 py-4 text-gray-700 transition-all hover:border-[#5B3DF5] hover:text-[#5B3DF5]"
            >

              Join Validation Program

            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
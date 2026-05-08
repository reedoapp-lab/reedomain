import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-black">
              Terms & Conditions
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              These Terms & Conditions govern the use of Reedo and its services.
              By accessing or using the platform, users agree to comply with
              these terms.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                1. About Reedo
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reedo is a platform that connects users with independent service
                professionals including cleaners, plumbers, electricians,
                movers, IT support providers, and other professionals across
                Poland.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                2. User Responsibilities
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Users agree to provide accurate information while using the
                platform and must not misuse the services, engage in fraud,
                harassment, or unlawful activities.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reedo reserves the right to suspend or remove accounts involved
                in suspicious or harmful activity.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                3. Professional Verification
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Service providers applying through Reedo may undergo identity
                verification and profile assessment before being approved on the
                platform.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                While Reedo aims to improve trust and safety, users understand
                that professionals remain independent service providers.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                4. Payments & Refunds
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Payments processed through Reedo may be temporarily held until
                services are completed successfully.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Refunds and disputes will be reviewed individually based on the
                circumstances and platform policies.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                5. Platform Availability
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reedo continuously improves and updates its platform. Certain
                features, pricing models, or functionalities may change over
                time without prior notice.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                6. Limitation of Liability
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reedo acts as a technology platform connecting users and
                professionals. While we strive to maintain quality and safety,
                Reedo cannot guarantee outcomes of independent services provided
                by third parties.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                7. Privacy
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                By using Reedo, users agree that certain information may be
                collected and processed for platform functionality, security,
                verification, and service improvement purposes.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                8. Future Updates
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                These Terms & Conditions may be updated periodically as Reedo
                evolves. Continued use of the platform after updates constitutes
                acceptance of the revised terms.
              </p>
            </div>

            {/* LAST UPDATED */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                Last updated: 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-5xl font-semibold text-black">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your privacy matters to us. This Privacy Policy explains how
            Reedo collects, uses, stores, and protects your information
            while using our platform and services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="space-y-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                1. Information We Collect
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reedo may collect personal information such as names,
                email addresses, phone numbers, account details,
                booking information, and payment-related data necessary
                to operate the platform.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                2. How We Use Information
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Your information may be used to:
              </p>

              <ul className="mt-4 space-y-3 text-lg leading-8 text-gray-600">
                <li>• Create and manage user accounts</li>
                <li>• Process bookings and payments</li>
                <li>• Improve platform security and trust</li>
                <li>• Verify professionals and providers</li>
                <li>• Provide customer support and dispute handling</li>
                <li>• Improve the Reedo experience and services</li>
              </ul>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                3. Verification & Security
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Professionals applying to Reedo may be required to provide
                government-issued identification and additional verification
                information for safety and trust purposes.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                We implement reasonable technical and operational measures
                to protect user data and platform activity.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                4. Payments & Transactions
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Certain payment-related information may be processed
                through trusted third-party payment providers to ensure
                secure transactions on the platform.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                5. Cookies & Analytics
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reedo may use cookies and analytics technologies to improve
                website functionality, understand user behavior, and optimize
                the user experience.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                6. Data Sharing
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reedo does not sell personal data. Certain information may
                be shared with trusted partners, payment processors, or
                verification providers only when necessary to operate the
                platform and services.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                7. User Rights
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Users may request updates, corrections, or deletion of their
                account information where legally applicable.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-2xl font-semibold text-black">
                8. Future Updates
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                This Privacy Policy may be updated periodically as Reedo
                evolves and expands its services. Continued use of the
                platform constitutes acceptance of future updates.
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
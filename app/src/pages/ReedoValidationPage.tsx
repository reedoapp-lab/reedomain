import { useState } from 'react';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

import { supabase } from '@/lib/supabase';

export default function ReedoValidationPage() {

  // LOADING + SUCCESS
  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  // FORM DATA
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    city: '',

    foreigner: '',

    service_problem: '',

    services: [] as string[],

    frustrations: '',

    early_access: '',
  });

  // SUBMIT FUNCTION
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from('validation_responses')
      .insert({
        ...formData,
        subscribed: true,
      });

    setLoading(false);

    if (!error) {
      setSubmitted(true);

      setFormData({
        full_name: '',
        email: '',
        city: '',

        foreigner: '',

        service_problem: '',

        services: [],

        frustrations: '',

        early_access: '',
      });
    } else {
      console.error(error);

      alert(
        'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#f6f3ff] via-white to-white px-6 pb-24 pt-40">

        {/* ACCENT GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
            Reedo Early Validation Program
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">

            Help Shape The Future Of

            <span className="block text-[#5B3DF5]">
              Smart Services In Poland
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">

            Reedo is building an AI-powered platform that makes
            booking trusted home and personal services easier,
            faster, and more accessible for everyone in Poland.

          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">

            We are currently validating the market and collecting
            real user feedback before launch.

          </p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-3xl rounded-3xl border border-[#5B3DF5]/10 bg-white p-8 shadow-[0_20px_60px_rgba(91,61,245,0.08)] sm:p-12">

          {/* SUCCESS STATE */}
          {submitted ? (

            <div className="relative overflow-hidden rounded-3xl border border-[#5B3DF5]/10 bg-gradient-to-b from-[#faf7ff] to-white p-10 text-center shadow-[0_25px_80px_rgba(91,61,245,0.10)]">

              {/* GLOW */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[500px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/15 blur-[100px]" />

              {/* CHECK ICON */}
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#5B3DF5] shadow-[0_15px_40px_rgba(91,61,245,0.35)]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

              </div>

              {/* TITLE */}
              <h2 className="relative mt-8 text-4xl font-semibold tracking-tight text-black">
                Validation Submitted
              </h2>

              {/* TEXT */}
              <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">

                Thank you for helping shape the future of Reedo.

                Your feedback helps us build smarter,
                faster, and more trusted services for
                modern life in Poland.

              </p>

              <p className="relative mx-auto mt-4 max-w-xl text-gray-500">

                Stay tuned for updates, early access,
                and exciting features coming soon.

              </p>

              {/* BUTTONS */}
              <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <button
                  onClick={() =>
                    (window.location.href =
                      '/why-reedo')
                  }
                  className="rounded-2xl bg-[#5B3DF5] px-7 py-3 text-white shadow-[0_12px_35px_rgba(91,61,245,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#4c32d9]"
                >
                  Explore Reedo
                </button>

                <button
                  onClick={() =>
                    (window.location.href =
                      '/services')
                  }
                  className="rounded-2xl border border-gray-200 bg-white px-7 py-3 text-gray-700 transition-all hover:border-[#5B3DF5] hover:text-[#5B3DF5]"
                >
                  Browse Services
                </button>

              </div>

              {/* SMALL TEXT */}
              <p className="relative mt-10 text-sm text-gray-400">
                Reedo • AI-Powered Smart Services
              </p>

            </div>

          ) : (

            <>
              {/* HEADER */}
              <div className="mb-10">

                <h2 className="text-3xl font-semibold">
                  Reedo Validation Survey
                </h2>

                <p className="mt-3 text-gray-500">

                  Your responses will help us improve Reedo
                  and demonstrate real market demand.

                </p>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

                {/* FULL NAME */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        full_name:
                          e.target.value,
                      })
                    }
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-[#5B3DF5]"
                    required
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-[#5B3DF5]"
                    required
                  />

                </div>

                {/* CITY */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Which city are you currently living in?
                  </label>

                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value,
                      })
                    }
                    placeholder="Warsaw"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-[#5B3DF5]"
                  />

                </div>

                {/* FOREIGNER */}
                <div>

                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Are you a foreigner / expat living in Poland?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {['Yes', 'No'].map(
                      (option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:border-[#5B3DF5]"
                        >

                          <input
                            type="radio"
                            name="foreigner"
                            checked={
                              formData.foreigner ===
                              option
                            }
                            onChange={() =>
                              setFormData({
                                ...formData,
                                foreigner:
                                  option,
                              })
                            }
                          />

                          {option}

                        </label>
                      )
                    )}

                  </div>

                </div>

                {/* SERVICE PROBLEM */}
                <div>

                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Have you ever struggled finding reliable services in Poland?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {[
                      'Frequently',
                      'Sometimes',
                      'Rarely',
                      'Never',
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:border-[#5B3DF5]"
                      >

                        <input
                          type="radio"
                          name="service_problem"
                          checked={
                            formData.service_problem ===
                            option
                          }
                          onChange={() =>
                            setFormData({
                              ...formData,
                              service_problem:
                                option,
                            })
                          }
                        />

                        {option}

                      </label>
                    ))}

                  </div>

                </div>

                {/* SERVICES */}
                <div>

                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Which services would you most likely use on Reedo?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {[
                      'Cleaning',
                      'Plumbing',
                      'Electrical',
                      'Moving Help',
                      'IT Assistance',
                      'Painting',
                      'Furniture Assembly',
                      'Home Repairs',
                    ].map((service) => (
                      <label
                        key={service}
                        className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:border-[#5B3DF5]"
                      >

                        <input
                          type="checkbox"
                          checked={formData.services.includes(
                            service
                          )}
                          onChange={(e) => {
                            if (
                              e.target.checked
                            ) {
                              setFormData({
                                ...formData,
                                services: [
                                  ...formData.services,
                                  service,
                                ],
                              });
                            } else {
                              setFormData({
                                ...formData,
                                services:
                                  formData.services.filter(
                                    (s) =>
                                      s !==
                                      service
                                  ),
                              });
                            }
                          }}
                        />

                        {service}

                      </label>
                    ))}

                  </div>

                </div>

                {/* FEEDBACK */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    What is your biggest frustration when booking services today?
                  </label>

                  <textarea
                    rows={5}
                    value={
                      formData.frustrations
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        frustrations:
                          e.target.value,
                      })
                    }
                    placeholder="Tell us about your experience..."
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-[#5B3DF5]"
                  />

                </div>

                {/* EARLY ACCESS */}
                <div>

                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Would you like early access to Reedo when we launch?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {['Yes', 'No'].map(
                      (option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:border-[#5B3DF5]"
                        >

                          <input
                            type="radio"
                            name="early_access"
                            checked={
                              formData.early_access ===
                              option
                            }
                            onChange={() =>
                              setFormData({
                                ...formData,
                                early_access:
                                  option,
                              })
                            }
                          />

                          {option}

                        </label>
                      )
                    )}

                  </div>

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-[#5B3DF5] px-6 py-4 text-lg font-medium text-white shadow-[0_15px_40px_rgba(91,61,245,0.3)] transition-all hover:-translate-y-[1px] hover:bg-[#4c32d9]"
                >
                  {loading
                    ? 'Submitting...'
                    : 'Submit Validation Response'}
                </button>

              </form>
            </>
          )}

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
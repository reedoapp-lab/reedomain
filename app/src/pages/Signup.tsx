import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Chrome,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useAuthStore } from '@/store/authStore';

import { LanguageSwitch } from '@/components/shared/LanguageSwitch';

import type { UserRole } from '@/types';

export function Signup() {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const {
    signup,
    isLoading,
    error,
  } = useAuthStore();

  const [showPassword, setShowPassword] =
    useState(false);

  const [agreeTerms, setAgreeTerms] =
    useState(false);

  const [showSurveyPopup, setShowSurveyPopup] =
    useState(false);

  const [formData, setFormData] =
    useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      role: 'customer' as UserRole,
    });

  const handleSubmit =
    async (e: React.FormEvent) => {

      e.preventDefault();

      if (!agreeTerms) {
        alert(
          'Please agree to the terms and privacy policy.'
        );
        return;
      }

      // REQUIRED VALIDATION
      if (
        !formData.firstName.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.password.trim()
      ) {

        alert(
          'First name, email, phone number and password are required.'
        );

        return;
      }

      const success =
        await signup(formData);

      if (success) {

        setShowSurveyPopup(true);

      }
    };

  return (

    <div className="flex min-h-screen bg-white">

      {/* LEFT */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-12 xl:px-20">

        {/* LANGUAGE */}
        <div className="absolute right-4 top-4">
          <LanguageSwitch />
        </div>

        <div className="mx-auto w-full max-w-md">

          {/* LOGO */}
          <Link
            to="/"
            className="mb-10 block"
          >

            <img
              src="/images/logo.png"
              alt="Reedo"
              className="h-40 w-auto"
            />

          </Link>

          {/* HEADING */}
          <h1 className="text-3xl font-semibold text-black">
            Join Reedo
          </h1>

          <p className="mt-2 text-gray-500 leading-7">

            Book trusted services instantly with AI-powered support across Poland.

          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* ERROR */}
            {error && (

              <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">

                {error}

              </div>

            )}

            {/* NAME */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* FIRST NAME */}
              <div className="space-y-2">

                <Label htmlFor="firstName">
                  First Name *
                </Label>

                <div className="relative">

                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName:
                          e.target.value,
                      })
                    }
                    placeholder="John"
                    className="h-12 rounded-xl pl-10"
                  />

                </div>

              </div>

              {/* LAST NAME */}
              <div className="space-y-2">

                <Label htmlFor="lastName">
                  Last Name
                </Label>

                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName:
                        e.target.value,
                    })
                  }
                  placeholder="Doe"
                  className="h-12 rounded-xl"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div className="space-y-2">

              <Label htmlFor="email">
                Email *
              </Label>

              <div className="relative">

                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email:
                        e.target.value,
                    })
                  }
                  placeholder="you@example.com"
                  className="h-12 rounded-xl pl-10"
                />

              </div>

            </div>

            {/* PHONE */}
            <div className="space-y-2">

              <Label htmlFor="phone">
                Phone Number *
              </Label>

              <div className="relative">

                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone:
                        e.target.value,
                    })
                  }
                  placeholder="+48 123 456 789"
                  className="h-12 rounded-xl pl-10"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="space-y-2">

              <Label htmlFor="password">
                Password *
              </Label>

              <div className="relative">

                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <Input
                  id="password"
                  required
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password:
                        e.target.value,
                    })
                  }
                  placeholder="••••••••"
                  className="h-12 rounded-xl pl-10 pr-10"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all hover:text-black"
                >

                  {showPassword ? (

                    <EyeOff className="h-5 w-5" />

                  ) : (

                    <Eye className="h-5 w-5" />

                  )}

                </button>

              </div>

            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2">

              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) =>
                  setAgreeTerms(
                    e.target.checked
                  )
                }
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5B3DF5]"
              />

              <Label
                htmlFor="terms"
                className="text-sm font-normal leading-6 text-gray-500"
              >

                I agree to the{' '}

                <Link
                  to="/terms"
                  className="text-[#5B3DF5] hover:underline"
                >
                  Terms
                </Link>{' '}

                and{' '}

                <Link
                  to="/privacy"
                  className="text-[#5B3DF5] hover:underline"
                >
                  Privacy Policy
                </Link>

              </Label>

            </div>

            {/* SUBMIT */}
            <Button
              type="submit"
              disabled={
                isLoading ||
                !agreeTerms
              }
              className="h-12 w-full rounded-xl bg-[#5B3DF5] text-white shadow-[0_10px_25px_rgba(91,61,245,0.25)] hover:bg-[#4c32d9]"
            >

              {isLoading
                ? 'Creating Account...'
                : 'Join Reedo'}

            </Button>

            {/* DIVIDER */}
            <div className="relative">

              <div className="absolute inset-0 flex items-center">

                <div className="w-full border-t border-gray-200" />

              </div>

              <div className="relative flex justify-center text-sm">

                <span className="bg-white px-2 text-gray-500">

                  Continue with

                </span>

              </div>

            </div>

            {/* GOOGLE */}
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full rounded-xl"
            >

              <Chrome className="mr-2 h-5 w-5" />

              Continue with Google

            </Button>

          </form>

          {/* LOGIN */}
          <p className="mt-8 text-center text-sm text-gray-600">

            Already have an account?{' '}

            <Link
              to="/login"
              className="font-medium text-[#5B3DF5] hover:underline"
            >

              Login

            </Link>

          </p>

        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden items-center justify-center bg-[#F9F9FB] lg:flex lg:w-1/2">

        <div className="p-12 text-center">

          <img
            src="/images/52.png"
            alt="Join Reedo"
            className="mx-auto mb-8 h-auto w-full max-w-md"
          />

          <h2 className="text-3xl font-semibold text-black">

            Smarter Services Start Here

          </h2>

          <p className="mt-4 max-w-md leading-8 text-gray-500">

            Find trusted professionals,
            get faster support,
            and experience AI-powered services designed
            for modern life in Poland.

          </p>

        </div>

      </div>

      {/* SURVEY POPUP */}
      {showSurveyPopup && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">

          <div className="w-full max-w-lg rounded-[32px] bg-white p-10 shadow-2xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-[#5B3DF5]">

              <Sparkles className="h-8 w-8" />

            </div>

            <h2 className="mt-6 text-3xl font-semibold text-black">

              Help Shape Reedo

            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">

              Your feedback can help us improve Reedo
              before launch and create a better experience
              for everyone.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* SURVEY */}
              <button
                onClick={() => {
                  window.location.href =
                    '/validation';
                }}
                className="flex-1 rounded-2xl bg-[#5B3DF5] px-6 py-4 font-medium text-white shadow-[0_15px_40px_rgba(91,61,245,0.35)] transition-all hover:-translate-y-[1px] hover:bg-[#4c32d9]"
              >

                Fill Survey

              </button>

              {/* SKIP */}
              <button
                onClick={() => {
                  setShowSurveyPopup(false);
                  navigate('/dashboard');
                }}
                className="flex-1 rounded-2xl border border-gray-200 bg-white px-6 py-4 font-medium text-gray-700 transition-all hover:border-[#5B3DF5] hover:text-[#5B3DF5]"
              >

                Skip For Now

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
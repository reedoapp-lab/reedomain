import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAuthStore } from '@/store/authStore';
import { LanguageSwitch } from '@/components/shared/LanguageSwitch';
import type { UserRole } from '@/types';

export function Signup() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { signup, isLoading, error } = useAuthStore();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'customer' as UserRole,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;

    const success = await signup(formData);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* Left */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-12 xl:px-20">
        
        <div className="absolute right-4 top-4">
          <LanguageSwitch />
        </div>

        <div className="mx-auto w-full max-w-md">

          {/* Logo */}
          <Link to="/" className="mb-10 block">
            <img
              src="/images/logo.png"
              alt="Reedo"
              className="h-40 w-auto"
            />
          </Link>

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-black">
            {t('auth.signupTitle')}
          </h1>
          <p className="mt-2 text-gray-500">
            {t('auth.signupSubtitle')}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Names */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t('auth.firstName')}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="John"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">{t('auth.lastName')}</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.email')}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">{t('auth.phone')}</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+48 123 456 789"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">{t('auth.password')}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label>{t('auth.role')}</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) =>
                  setFormData({ ...formData, role: value as UserRole })
                }
                className="grid grid-cols-2 gap-4"
              >
                {['customer', 'provider'].map((role) => (
                  <div key={role}>
                    <RadioGroupItem
                      value={role}
                      id={role}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={role}
                      className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 p-4 transition-all hover:border-gray-300 peer-data-[state=checked]:border-[#5B3DF5] peer-data-[state=checked]:bg-[#5B3DF5]/5"
                    >
                      <span className="text-sm font-medium">
                        {t(
                          role === 'customer'
                            ? 'auth.roleCustomer'
                            : 'auth.roleProvider'
                        )}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5B3DF5]"
              />
              <Label htmlFor="terms" className="text-sm font-normal text-gray-500">
                {t('auth.agreeTerms')}{' '}
                <Link to="/terms" className="text-[#5B3DF5] hover:underline">
                  {t('footer.terms')}
                </Link>{' '}
                {t('auth.and')}{' '}
                <Link to="/privacy" className="text-[#5B3DF5] hover:underline">
                  {t('footer.privacy')}
                </Link>
              </Label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.25)]"
              disabled={isLoading || !agreeTerms}
            >
              {isLoading ? 'Loading...' : t('nav.signup')}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {t('auth.orContinueWith')}
                </span>
              </div>
            </div>

            {/* Google */}
            <Button type="button" variant="outline" className="w-full">
              <Chrome className="mr-2 h-5 w-5" />
              Google
            </Button>
          </form>

          {/* Login link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            {t('auth.hasAccount')}{' '}
            <Link
              to="/login"
              className="font-medium text-[#5B3DF5] hover:underline"
            >
              {t('nav.login')}
            </Link>
          </p>

        </div>
      </div>

      {/* Right */}
      <div className="hidden items-center justify-center bg-[#F9F9FB] lg:flex lg:w-1/2">
        <div className="p-12 text-center">
          <img
            src="/images/52.png"
            alt="Join"
            className="mx-120 mb-8 h-200 w-96"
          />
          <h2 className="text-2xl font-semibold text-black">
            Join Reedo
          </h2>
          <p className="mt-3 text-gray-500">
            Start booking services or offering your expertise today.
          </p>
        </div>
      </div>

    </div>
  );
}
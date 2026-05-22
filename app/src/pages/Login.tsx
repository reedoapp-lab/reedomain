import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuthStore } from '@/store/authStore';
import { LanguageSwitch } from '@/components/shared/LanguageSwitch';

export function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
  login,
  googleSignIn,
  isLoading,
  error,
} = useAuthStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* Left Side */}
      <div className="flex w-full flex-col justify-center px-4 sm:px-6 lg:w-1/2 lg:px-12 xl:px-20">
        
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
            {t('auth.loginTitle')}
          </h1>
          <p className="mt-2 text-gray-500">
            {t('auth.loginSubtitle')}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.email')}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="pl-10"
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Options */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-[#5B3DF5] hover:underline"
              >
                {t('auth.forgotPassword')}
              </Link>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#5B3DF5] hover:bg-[#4c32d9] text-white shadow-[0_10px_25px_rgba(91,61,245,0.25)]"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : t('nav.login')}
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
<Button
  type="button"
  variant="outline"
  className="w-full"
  onClick={googleSignIn}
>
  <Chrome className="mr-2 h-5 w-5" />
  Continue with Google
</Button>

          </form>

          {/* Signup */}
          <p className="mt-8 text-center text-sm text-gray-600">
            {t('auth.noAccount')}{' '}
            <Link
              to="/signup"
              className="font-medium text-[#5B3DF5] hover:underline"
            >
              {t('nav.signup')}
            </Link>
          </p>

        </div>
      </div>

      {/* Right Side (clean, no gradient) */}
      <div className="hidden items-center justify-center bg-[#F9F9FB] lg:flex lg:w-1/2">
        <div className="p-12 text-center">
          <img
            src="/images/login.png"
            alt="Welcome"
            className="mx-auto mb-8 h-auto w-96"
          />
          <h2 className="text-2xl font-semibold text-black">
            Welcome Back
          </h2>
          <p className="mt-3 text-gray-500">
            Access your bookings and manage services effortlessly.
          </p>
        </div>
      </div>

    </div>
  );
}
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LanguageSwitch } from '@/components/shared/LanguageSwitch';
import { useAuthStore } from '@/store/authStore';
import { useNotificationStore } from '@/store/notificationStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navigation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();
  const { unreadCount } = useNotificationStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // ✅ UPDATED NAV LINKS
const navLinks = [

  { label: 'WhyReedo', type: 'route', value: '/why-reedo' },
/*   { label: t('nav.pricing'), type: 'anchor', value: '#pricing' }, */
  {
  label: 'Reedo AI',
  type: 'route',
  value: '/reedo-ai',
},

 {
  label: 'Book a Service',
  type: 'route',
  value: '/services',
},

{ label: 'Support', type: 'route', value: '/help', },

/*    {
    label: 'Hiring Professionals',
    type: 'route',
    value: '/join-professionals',
  }, */
];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<div
  className={cn(
    'relative w-full max-w-9xl overflow-hidden rounded-2xl transition-all duration-500',

    // GLASS
    'bg-white/78 backdrop-blur-2xl',

    // THIN ACCENT OUTLINE
    'border border-[#7C5CFF]/25',

    // SOFT SHADOW
    'shadow-[0_20px_60px_rgba(0,0,0,0.06)]',

    // VERY SUBTLE INNER LIGHT
    'before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/40 before:pointer-events-none',

    isScrolled &&
      'scale-[0.985] shadow-[0_25px_70px_rgba(91,61,245,0.10)]'
  )}
>
        <nav className="flex h-16 items-center justify-between px-6">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Reedo logo"
              className="h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-6 bg-gray-100/70 px-5 py-1.5 rounded-lg">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.type === 'route') {
                      navigate(link.value);
                    } else {
                      window.location.href = link.value;
                    }
                  }}
                  className={`text-sm font-medium transition ${
  link.label === 'Hiring Professionals'
    ? 'text-red-500 font-semibold hover:text-red-600'
    : 'text-gray-600 hover:text-[#5B3DF5]'
}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            <LanguageSwitch className="hidden sm:flex" />

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <button className="relative rounded-lg p-2 text-gray-600 hover:bg-black/5 transition">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-black/5 transition">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5B3DF5]">
                        {user?.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.firstName}
                            className="h-full w-full rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="hidden text-sm font-medium text-gray-700 lg:block">
                        {user?.firstName}
                      </span>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                      {t('nav.dashboard')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      {t('nav.profile')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/bookings')}>
                      {t('nav.bookings')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/messages')}>
                      {t('nav.messages')}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      {t('nav.logout')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="hidden sm:flex text-gray-700 hover:bg-gray-100"
                  onClick={() => navigate('/login')}
                >
                  {t('nav.login')}
                </Button>

                <Button
                  className="hidden sm:flex bg-[#5B3DF5] hover:bg-[#4c32d9] text-white px-5 py-2 rounded-lg shadow-[0_8px_20px_rgba(91,61,245,0.3)] transition-all hover:-translate-y-[1px]"
                  onClick={() => navigate('/signup')}
                >
                  {/* {t('nav.becomeProvider')} */}
                  Join Reedo
                </Button>
              </>
            )}

            {/* Mobile Toggle */}
            <button
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-2 mx-auto max-w-6xl rounded-xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.type === 'route') {
                      navigate(link.value);
                    } else {
                      window.location.href = link.value;
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-[#5B3DF5]"
                >
                  {link.label}
                </button>
              ))}

              <hr />

              {!isAuthenticated && (
                <>
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => {
                      navigate('/login');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.login')}
                  </Button>

                  <Button
                    className="bg-[#5B3DF5] hover:bg-[#4c32d9] text-white"
                    onClick={() => {
                      navigate('/signup');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {t('nav.signup')}
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
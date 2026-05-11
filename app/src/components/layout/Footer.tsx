import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { supabase } from '@/lib/supabase';

export function Footer() {

  const { t } = useTranslation();

  // PROVIDER WAITLIST
  const [providerEmail, setProviderEmail] =
    useState('');

  const [providerLoading, setProviderLoading] =
    useState(false);

  const [providerSuccess, setProviderSuccess] =
    useState(false);

  // HANDLE SIGNUP
  const handleProviderSignup = async () => {

    if (!providerEmail) return;

    setProviderLoading(true);

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: providerEmail,
      });

    setProviderLoading(false);

    if (!error) {

      setProviderSuccess(true);

      setProviderEmail('');

      setTimeout(() => {
        setProviderSuccess(false);
      }, 5000);

    } else {

  console.log(error);

  if (
    error.message.includes('duplicate')
  ) {

    alert(
      'This email is already on the waitlist.'
    );

  } else {

    alert(
      error.message
    );
  }
}
  };

  const footerLinks = {

    services: [
      {
        label: t('services.cleaning'),
        href: '/services?category=cleaning',
      },
      {
        label: t('services.plumbing'),
        href: '/services?category=plumbing',
      },
      {
        label: t('services.electrical'),
        href: '/services?category=electrical',
      },
      {
        label: t('services.itSupport'),
        href: '/services?category=it_support',
      },
    ],

    company: [
      {
        label: t('footer.aboutUs'),
        href: '/why-reedo',
      },
      {
        label: t('footer.careers'),
        href: '/careers',
      },
      {
        label: t('footer.blog'),
        href: '/blog',
      },
      {
        label: t('footer.press'),
        href: '/press',
      },
    ],

    support: [
      {
        label: t('footer.helpCenter'),
        href: '/help',
      },
      {
        label: t('footer.safety'),
        href: '/trust-safety',
      },
      {
        label: t('footer.terms'),
        href: '/terms',
      },
      {
        label: t('footer.privacy'),
        href: '/privacy',
      },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src="/images/logo2.png"
                alt="Reedo"
                className="h-40 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-sm text-gray-400">
              {t('footer.tagline')}
            </p>

            {/* PROVIDERS WAITLIST */}
            <div className="mt-6">

              <p className="mb-2 text-sm font-medium text-gray-300">
                Join Reedo Professionals
              </p>

              <p className="mb-4 max-w-sm text-sm leading-6 text-gray-500">
                Join the provider waitlist and get notified
                once Reedo professional onboarding launches.
              </p>

              {providerSuccess ? (

                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">

                  🚀 You’re now on the Reedo Professionals waitlist.

                </div>

              ) : (

                <div className="flex gap-2">

                  <Input
                    type="email"
                    value={providerEmail}
                    onChange={(e) =>
                      setProviderEmail(
                        e.target.value
                      )
                    }
                    placeholder="Enter your email"
                    className="border-gray-800 bg-gray-900 text-white placeholder:text-gray-500"
                  />

                  <Button
                    onClick={handleProviderSignup}
                    disabled={providerLoading}
                    className="bg-[#5B3DF5] hover:bg-[#4c32d9]"
                  >

                    {providerLoading ? (
                      '...'
                    ) : (
                      <Send className="h-4 w-4" />
                    )}

                  </Button>

                </div>
              )}

            </div>
          </div>

          {/* SERVICES */}
          <div>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t('footer.services')}
            </h3>

            <ul className="space-y-3">

              {footerLinks.services.map((link) => (
                <li key={link.href}>

                  <Link
                    to={link.href}
                    className="text-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* COMPANY */}
          <div>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t('footer.company')}
            </h3>

            <ul className="space-y-3">

              {footerLinks.company.map((link) => (
                <li key={link.href}>

                  <Link
                    to={link.href}
                    className="text-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t('footer.support')}
            </h3>

            <ul className="space-y-3">

              {footerLinks.support.map((link) => (
                <li key={link.href}>

                  <Link
                    to={link.href}
                    className="text-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-gray-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

            {/* COPYRIGHT */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Reedo.{' '}
              {t('footer.rights')}
            </p>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* VALIDATION BUTTON */}
              <Link
                to="/validation"
                className="inline-flex items-center gap-2 rounded-xl bg-[#5B3DF5] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(91,61,245,0.35)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#4c32d9]"
              >
                Help Shape Reedo
              </Link>

              {/* SOCIALS */}
              <div className="flex gap-4">

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-all hover:bg-[#5B3DF5] hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
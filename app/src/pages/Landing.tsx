import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/landing/Hero';
import { ServicesGrid } from '@/components/landing/ServicesGrid';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { TrustSafety } from '@/components/landing/TrustSafety';
import { Testimonials } from '@/components/landing/Testimonials';
import { AppDownload } from '@/components/landing/AppDownload';
import { Footer } from '@/components/layout/Footer';

export function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesGrid />
        <HowItWorks />
        <TrustSafety />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}

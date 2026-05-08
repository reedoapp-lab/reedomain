import { ReactNode } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navigation />

      {/* Page Content */}
      <main className="flex-1 pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { useAuthStore } from '@/store/authStore';

// Pages
import { Landing } from '@/pages/Landing';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { CustomerDashboard } from '@/pages/CustomerDashboard';
import { ProviderDashboard } from '@/pages/ProviderDashboard';
import { ServiceListing } from '@/pages/ServiceListing';
import { ProviderProfile } from '@/pages/ProviderProfile';
import { Booking } from '@/pages/Booking';
import { Payment } from '@/pages/Payment';
import { Messaging } from '@/pages/Messaging';
import WhyReedo from '@/pages/WhyReedo';
import JoinProfessionals from '@/pages/JoinProfessionals';
import TermsPage from '@/pages/TermsPage';
import HelpCenterPage from '@/pages/HelpCenterPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import ReedoAiPage from '@/pages/ReedoAiPage';
import PressPage from '@/pages/PressPage';
import CareersPage from '@/pages/CareersPage';
import ReedoValidationPage from '@/pages/ReedoValidationPage';
import Blog from '@/pages/Blog';
import CustomerProfilePage from '@/pages/CustomerProfile';
import TrustSafetyPage from '@/pages/TrustSafetyPage';
import AuthCallback from '@/pages/AuthCallback';


// Loading component
function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#5B3DF5] border-t-transparent" />
    </div>
  );
}

// Protected Route
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Role-based dashboard
function RoleBasedDashboard() {
  const { user } = useAuthStore();

  if (user?.role === 'provider') {
    return <ProviderDashboard />;
  }

  return <CustomerDashboard />;
}

function App() {
  useEffect(() => {
    // init logic if needed
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
     <BrowserRouter>
  <ScrollToTop />

  <Suspense fallback={<Loading />}>
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
             <Route path="/why-reedo" element={<WhyReedo />} />
             <Route path="/join-professionals" element={<JoinProfessionals />} />
             

            <Route path="/trust-safety" element={<TrustSafetyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/reedo-ai" element={<ReedoAiPage />} />\
            <Route path="/press" element={<PressPage />} />
            <Route path="/careers" element={<CareersPage />} />

            <Route
  path="/validation"
  element={<ReedoValidationPage />}
/>
<Route
  path="/profile"
  element={<CustomerProfilePage />}
/>

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <RoleBasedDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <ServiceListing />
                </ProtectedRoute>
              }
            />
            <Route
  path="/blog"
  element={<Blog />}
/>

        <Route
              path="/provider/:id"
              element={
                <ProtectedRoute>
                  <ProviderProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/booking"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            />

            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />

            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <Messaging />
                </ProtectedRoute>
              }
            />

            <Route
              path="/bookings"
              element={
                <ProtectedRoute>
                  <CustomerDashboard />
                </ProtectedRoute>
              }
            />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
  path="/auth/callback"
  element={<AuthCallback />}
/>

          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  );
}



export default App;


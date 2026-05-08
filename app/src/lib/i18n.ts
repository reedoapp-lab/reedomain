import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        services: 'Services',
        howItWorks: 'How it Works',
        pricing: 'Pricing',
        support: 'Support',
        becomeProvider: 'Become a Professional',
        login: 'Login',
        signup: 'Sign Up',
        logout: 'Logout',
        dashboard: 'Dashboard',
        profile: 'Profile',
        bookings: 'Bookings',
        messages: 'Messages',
      },

      // Hero
      hero: {
        title: 'Find trusted local services in minutes',
        subtitle: 'Connect with verified professionals for cleaning, repairs, IT support, and more.',
        searchPlaceholder: 'What service do you need?',
        searchButton: 'Search',
        popularServices: 'Popular:',
      },

      // Services
      services: {
        title: 'Popular Services',
        subtitle: 'Find the right professional for any task',
        viewAll: 'View All Services',
        cleaning: 'Home Cleaning',
        cleaningDesc: 'Professional cleaning for your home or office',
        plumbing: 'Plumbing',
        plumbingDesc: 'Fix leaks, installations, and repairs',
        electrical: 'Electrical',
        electricalDesc: 'Wiring, installations, and electrical repairs',
        itSupport: 'IT Support',
        itSupportDesc: 'Computer help, networks, and tech support',
        gardening: 'Gardening',
        gardeningDesc: 'Lawn care, landscaping, and garden maintenance',
        painting: 'Painting',
        paintingDesc: 'Interior and exterior painting services',
        moving: 'Moving',
        movingDesc: 'Professional moving and packing services',
        applianceRepair: 'Appliance Repair',
        applianceRepairDesc: 'Fix washing machines, fridges, and more',
      },

      // How It Works
      howItWorks: {
        title: 'How It Works',
        subtitle: 'Get things done in 3 simple steps',
        step1: {
          title: 'Request a Service',
          description: 'Tell us what you need and when you need it.',
        },
        step2: {
          title: 'Get Matched',
          description: 'We connect you with the best verified professionals.',
        },
        step3: {
          title: 'Enjoy Results',
          description: 'Sit back and relax while the experts handle the job.',
        },
      },

      // Trust & Safety
      trustSafety: {
        title: 'Trust & Safety',
        subtitle: 'Your security is our priority',
        verified: {
          title: 'Verified Professionals',
          description: 'All providers undergo thorough background checks and identity verification before joining our platform.',
        },
        secure: {
          title: 'Secure Payments',
          description: 'Pay safely through our platform. Your payment is only released when the job is completed to your satisfaction.',
        },
      },

      // Testimonials
      testimonials: {
        title: 'What Our Customers Say',
        subtitle: 'Join thousands of satisfied customers',
        annaText: 'Excellent service! The plumber arrived on time and fixed everything perfectly. Highly recommend!',
        marekText: 'I use Reedo for monthly cleaning. The professionals are always punctual and thorough.',
        katarzynaText: 'Great IT support. Solved my network issues quickly and explained everything clearly.',
        piotrText: 'Professional electrician, fair pricing, and quality work. Will definitely use again.',
        zofiaText: 'The cleaning service exceeded my expectations. My apartment has never looked better!',
        janText: 'Reliable painting service. They were careful with my furniture and did a fantastic job.',
      },

      // Stats
      stats: {
        servicesCompleted: 'Services Completed',
        verifiedProviders: 'Verified Providers',
        averageRating: 'Average Rating',
        avgResponseTime: 'Avg. Response Time',
      },

      // App Download
      appDownload: {
        title: 'Get the Reedo App',
        subtitle: 'Book services on the go. Available on iOS and Android.',
        appStore: 'Download on App Store',
        googlePlay: 'Get it on Google Play',
      },

      // Footer
      footer: {
        tagline: 'Find trusted local services in minutes.',
        services: 'Services',
        company: 'Company',
        aboutUs: 'About Us',
        careers: 'Careers',
        blog: 'Blog',
        press: 'Press',
        support: 'Support',
        helpCenter: 'Help Center',
        safety: 'Safety',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        newsletter: 'Newsletter',
        newsletterPlaceholder: 'Enter your email',
        subscribe: 'Subscribe',
        rights: 'All rights reserved.',
      },

      // Auth
      auth: {
        loginTitle: 'Welcome Back',
        loginSubtitle: 'Sign in to your account',
        signupTitle: 'Create Account',
        signupSubtitle: 'Join thousands of satisfied customers',
        email: 'Email',
        password: 'Password',
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone Number',
        role: 'I want to...',
        roleCustomer: 'Book Services',
        roleProvider: 'Offer Services',
        forgotPassword: 'Forgot password?',
        orContinueWith: 'Or continue with',
        noAccount: "Don't have an account?",
        hasAccount: 'Already have an account?',
        agreeTerms: 'I agree to the',
        and: 'and',
      },

      // Customer Flow
      customer: {
        home: {
          title: 'Find Services Near You',
          nearbyProviders: 'Nearby Providers',
          categories: 'Categories',
        },
        search: {
          filters: 'Filters',
          priceRange: 'Price Range',
          rating: 'Rating',
          distance: 'Distance',
          availability: 'Availability',
          applyFilters: 'Apply Filters',
          clearFilters: 'Clear',
          results: 'results found',
          sortBy: 'Sort by',
        },
        provider: {
          verified: 'Verified',
          reviews: 'reviews',
          bookNow: 'Book Now',
          contact: 'Contact',
          about: 'About',
          services: 'Services',
          pricing: 'Pricing',
          availability: 'Availability',
          reviewCount: '{{count}} reviews',
        },
        booking: {
          title: 'Book a Service',
          selectDate: 'Select Date',
          selectTime: 'Select Time',
          address: 'Service Address',
          notes: 'Additional Notes',
          notesPlaceholder: 'Any special instructions...',
          confirm: 'Confirm Booking',
          summary: 'Booking Summary',
          service: 'Service',
          provider: 'Provider',
          date: 'Date',
          time: 'Time',
          total: 'Total',
        },
        payment: {
          title: 'Payment',
          cardNumber: 'Card Number',
          expiry: 'Expiry Date',
          cvc: 'CVC',
          pay: 'Pay {{amount}}',
          secure: 'Secure payment processed by Stripe',
        },
        dashboard: {
          title: 'My Bookings',
          upcoming: 'Upcoming',
          completed: 'Completed',
          cancelled: 'Cancelled',
          rebook: 'Rebook',
          review: 'Write Review',
          cancel: 'Cancel',
          noBookings: 'No bookings yet',
        },
        review: {
          title: 'Write a Review',
          rating: 'Your Rating',
          comment: 'Your Review',
          submit: 'Submit Review',
          placeholder: 'Share your experience...',
        },
      },

      // Provider Flow
      provider: {
        onboarding: {
          title: 'Become a Professional',
          step1: 'Profile',
          step2: 'Services',
          step3: 'Verification',
          bio: 'About You',
          bioPlaceholder: 'Tell customers about your experience...',
          services: 'Select Services',
          pricing: 'Set Your Pricing',
          photos: 'Upload Photos',
          documents: 'Upload ID/Documents',
          submit: 'Submit Application',
        },
        dashboard: {
          title: 'Provider Dashboard',
          incoming: 'Incoming Requests',
          active: 'Active Jobs',
          earnings: 'Earnings',
          accept: 'Accept',
          reject: 'Reject',
          start: 'Start Job',
          complete: 'Complete',
          totalEarnings: 'Total Earnings',
          thisMonth: 'This Month',
          pendingPayout: 'Pending Payout',
        },
      },

      // Admin
      admin: {
        title: 'Admin Panel',
        users: 'Users',
        providers: 'Providers',
        bookings: 'Bookings',
        disputes: 'Disputes',
        approve: 'Approve',
        reject: 'Reject',
        suspend: 'Suspend',
      },

      // Notifications
      notifications: {
        title: 'Notifications',
        markAllRead: 'Mark all as read',
        bookingRequest: 'New Booking Request',
        bookingRequestMsg: 'You have a new booking request',
        bookingConfirmed: 'Booking Confirmed',
        bookingConfirmedMsg: 'Your booking has been confirmed',
        bookingCancelled: 'Booking Cancelled',
        bookingCancelledMsg: 'Your booking has been cancelled',
        providerAssigned: 'Provider Assigned',
        providerAssignedMsg: 'A provider has been assigned to your booking',
        serviceCompleted: 'Service Completed',
        serviceCompletedMsg: 'Your service has been completed',
        newMessage: 'New Message',
        newMessageMsg: 'You have a new message from {{senderName}}',
        verificationApproved: 'Verification Approved',
        verificationApprovedMsg: 'Your provider account has been verified',
        verificationRejected: 'Verification Rejected',
        verificationRejectedMsg: 'Your verification was rejected. Please resubmit.',
      },

      // Common
      common: {
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close',
        back: 'Back',
        next: 'Next',
        continue: 'Continue',
        search: 'Search',
        filter: 'Filter',
        sort: 'Sort',
        showMore: 'Show More',
        showLess: 'Show Less',
        readMore: 'Read More',
        perHour: '/hour',
        perJob: '/job',
        from: 'From',
        to: 'to',
        km: 'km',
        minutes: 'min',
        hours: 'hours',
        days: 'days',
        today: 'Today',
        tomorrow: 'Tomorrow',
        yesterday: 'Yesterday',
      },
    },
  },
  pl: {
    translation: {
      // Navigation
      nav: {
        services: 'Usługi',
        howItWorks: 'Jak To Działa',
        pricing: 'Cennik',
        support: 'Pomoc',
        becomeProvider: 'Zostań Ekspertem',
        login: 'Zaloguj',
        signup: 'Zarejestruj',
        logout: 'Wyloguj',
        dashboard: 'Panel',
        profile: 'Profil',
        bookings: 'Rezerwacje',
        messages: 'Wiadomości',
      },

      // Hero
      hero: {
        title: 'Znajdź zaufane usługi lokalne w kilka minut',
        subtitle: 'Połącz się ze zweryfikowanymi profesjonalistami do sprzątania, napraw, wsparcia IT i więcej.',
        searchPlaceholder: 'Jakiej usługi potrzebujesz?',
        searchButton: 'Szukaj',
        popularServices: 'Popularne:',
      },

      // Services
      services: {
        title: 'Popularne Usługi',
        subtitle: 'Znajdź odpowiedniego profesjonalistę do każdego zadania',
        viewAll: 'Zobacz Wszystkie Usługi',
        cleaning: 'Sprzątanie',
        cleaningDesc: 'Profesjonalne sprzątanie domu lub biura',
        plumbing: 'Hydraulika',
        plumbingDesc: 'Naprawy przecieków, instalacje i naprawy',
        electrical: 'Elektryka',
        electricalDesc: 'Instalacje elektryczne i naprawy',
        itSupport: 'Wsparcie IT',
        itSupportDesc: 'Pomoc komputerowa, sieci i wsparcie techniczne',
        gardening: 'Ogrodnictwo',
        gardeningDesc: 'Pielęgnacja trawników i ogrodów',
        painting: 'Malowanie',
        paintingDesc: 'Usługi malarskie wewnątrz i na zewnątrz',
        moving: 'Przeprowadzki',
        movingDesc: 'Profesjonalne przeprowadzki i pakowanie',
        applianceRepair: 'Naprawa AGD',
        applianceRepairDesc: 'Naprawa pralek, lodówek i innych',
      },

      // How It Works
      howItWorks: {
        title: 'Jak To Działa',
        subtitle: 'Załatw sprawy w 3 prostych krokach',
        step1: {
          title: 'Złóż Zlecenie',
          description: 'Powiedz nam czego potrzebujesz i kiedy.',
        },
        step2: {
          title: 'Znajdź Eksperta',
          description: 'Łączymy Cię z najlepszymi zweryfikowanymi profesjonalistami.',
        },
        step3: {
          title: 'Ciesz Się Efektem',
          description: 'Odpoczywaj podczas gdy eksperci wykonują pracę.',
        },
      },

      // Trust & Safety
      trustSafety: {
        title: 'Zaufanie i Bezpieczeństwo',
        subtitle: 'Twoje bezpieczeństwo jest naszym priorytetem',
        verified: {
          title: 'Zweryfikowani Profesjonaliści',
          description: 'Wszyscy dostawcy przechodzą dokładną weryfikację tożsamości i kontrolę bezpieczeństwa przed dołączeniem do platformy.',
        },
        secure: {
          title: 'Bezpieczne Płatności',
          description: 'Płać bezpiecznie przez naszą platformę. Twoja płatność jest zwolniona dopiero gdy usługa zostanie wykonana.',
        },
      },

      // Testimonials
      testimonials: {
        title: 'Co Mówią Nasi Klienci',
        subtitle: 'Dołącz do tysięcy zadowolonych klientów',
        annaText: 'Świetna usługa! Hydraulik przyjechał na czas i wszystko naprawił perfekcyjnie. Gorąco polecam!',
        marekText: 'Korzystam z Reedo do miesięcznego sprzątania. Profesjonaliści są zawsze punktualni i dokładni.',
        katarzynaText: 'Świetne wsparcie IT. Szybko rozwiązali problemy z siecią i wszystko wyjaśnili.',
        piotrText: 'Profesjonalny elektryk, uczciwa cena i jakość pracy. Na pewno skorzystam ponownie.',
        zofiaText: 'Usługa sprzątania przerosła moje oczekiwania. Moje mieszkanie nigdy nie wyglądało lepiej!',
        janText: 'Rzetelna usługa malarska. Byli ostrożni z meblami i wykonali fantastyczną robotę.',
      },

      // Stats
      stats: {
        servicesCompleted: 'Wykonanych Usług',
        verifiedProviders: 'Zweryfikowanych Ekspertów',
        averageRating: 'Średnia Ocena',
        avgResponseTime: 'Śr. Czas Odpowiedzi',
      },

      // App Download
      appDownload: {
        title: 'Pobierz Aplikację Reedo',
        subtitle: 'Rezerwuj usługi w podróży. Dostępna na iOS i Android.',
        appStore: 'Pobierz z App Store',
        googlePlay: 'Pobierz z Google Play',
      },

      // Footer
      footer: {
        tagline: 'Znajdź zaufane usługi lokalne w kilka minut.',
        services: 'Usługi',
        company: 'Firma',
        aboutUs: 'O Nas',
        careers: 'Kariera',
        blog: 'Blog',
        press: 'Prasa',
        support: 'Pomoc',
        helpCenter: 'Centrum Pomocy',
        safety: 'Bezpieczeństwo',
        terms: 'Regulamin',
        privacy: 'Polityka Prywatności',
        newsletter: 'Newsletter',
        newsletterPlaceholder: 'Wpisz swój email',
        subscribe: 'Zapisz Się',
        rights: 'Wszelkie prawa zastrzeżone.',
      },

      // Auth
      auth: {
        loginTitle: 'Witaj Ponownie',
        loginSubtitle: 'Zaloguj się na swoje konto',
        signupTitle: 'Utwórz Konto',
        signupSubtitle: 'Dołącz do tysięcy zadowolonych klientów',
        email: 'Email',
        password: 'Hasło',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        phone: 'Numer Telefonu',
        role: 'Chcę...',
        roleCustomer: 'Rezerwować Usługi',
        roleProvider: 'Oferować Usługi',
        forgotPassword: 'Zapomniałeś hasła?',
        orContinueWith: 'Lub kontynuuj przez',
        noAccount: 'Nie masz konta?',
        hasAccount: 'Masz już konto?',
        agreeTerms: 'Akceptuję',
        and: 'i',
      },

      // Customer Flow
      customer: {
        home: {
          title: 'Znajdź Usługi w Pobliżu',
          nearbyProviders: 'Eksperci w Pobliżu',
          categories: 'Kategorie',
        },
        search: {
          filters: 'Filtry',
          priceRange: 'Zakres Ceny',
          rating: 'Ocena',
          distance: 'Odległość',
          availability: 'Dostępność',
          applyFilters: 'Zastosuj Filtry',
          clearFilters: 'Wyczyść',
          results: 'znalezionych wyników',
          sortBy: 'Sortuj według',
        },
        provider: {
          verified: 'Zweryfikowany',
          reviews: 'opinii',
          bookNow: 'Zarezerwuj',
          contact: 'Kontakt',
          about: 'O Mnie',
          services: 'Usługi',
          pricing: 'Cennik',
          availability: 'Dostępność',
          reviewCount: '{{count}} opinii',
        },
        booking: {
          title: 'Zarezerwuj Usługę',
          selectDate: 'Wybierz Datę',
          selectTime: 'Wybierz Godzinę',
          address: 'Adres Usługi',
          notes: 'Dodatkowe Informacje',
          notesPlaceholder: 'Jakieś szczególne instrukcje...',
          confirm: 'Potwierdź Rezerwację',
          summary: 'Podsumowanie',
          service: 'Usługa',
          provider: 'Ekspert',
          date: 'Data',
          time: 'Godzina',
          total: 'Razem',
        },
        payment: {
          title: 'Płatność',
          cardNumber: 'Numer Karty',
          expiry: 'Data Ważności',
          cvc: 'CVC',
          pay: 'Zapłać {{amount}}',
          secure: 'Bezpieczna płatność przez Stripe',
        },
        dashboard: {
          title: 'Moje Rezerwacje',
          upcoming: 'Nadchodzące',
          completed: 'Zakończone',
          cancelled: 'Anulowane',
          rebook: 'Rezerwuj Ponownie',
          review: 'Napisz Opinię',
          cancel: 'Anuluj',
          noBookings: 'Brak rezerwacji',
        },
        review: {
          title: 'Napisz Opinię',
          rating: 'Twoja Ocena',
          comment: 'Twoja Opinia',
          submit: 'Wyślij Opinię',
          placeholder: 'Podziel się swoim doświadczeniem...',
        },
      },

      // Provider Flow
      provider: {
        onboarding: {
          title: 'Zostań Profesjonalistą',
          step1: 'Profil',
          step2: 'Usługi',
          step3: 'Weryfikacja',
          bio: 'O Tobie',
          bioPlaceholder: 'Opowiedz klientom o swoim doświadczeniu...',
          services: 'Wybierz Usługi',
          pricing: 'Ustaw Ceny',
          photos: 'Dodaj Zdjęcia',
          documents: 'Dodaj Dokumenty',
          submit: 'Wyślij Zgłoszenie',
        },
        dashboard: {
          title: 'Panel Eksperta',
          incoming: 'Nowe Zlecenia',
          active: 'Aktywne Zlecenia',
          earnings: 'Zarobki',
          accept: 'Akceptuj',
          reject: 'Odrzuć',
          start: 'Rozpocznij',
          complete: 'Zakończ',
          totalEarnings: 'Całkowite Zarobki',
          thisMonth: 'Ten Miesiąc',
          pendingPayout: 'Oczekujące Wypłaty',
        },
      },

      // Admin
      admin: {
        title: 'Panel Admina',
        users: 'Użytkownicy',
        providers: 'Eksperci',
        bookings: 'Rezerwacje',
        disputes: 'Spory',
        approve: 'Zatwierdź',
        reject: 'Odrzuć',
        suspend: 'Zawieś',
      },

      // Notifications
      notifications: {
        title: 'Powiadomienia',
        markAllRead: 'Oznacz wszystkie jako przeczytane',
        bookingRequest: 'Nowe Zlecenie',
        bookingRequestMsg: 'Masz nowe zlecenie',
        bookingConfirmed: 'Rezerwacja Potwierdzona',
        bookingConfirmedMsg: 'Twoja rezerwacja została potwierdzona',
        bookingCancelled: 'Rezerwacja Anulowana',
        bookingCancelledMsg: 'Twoja rezerwacja została anulowana',
        providerAssigned: 'Ekspert Przydzielony',
        providerAssignedMsg: 'Ekspert został przydzielony do Twojego zlecenia',
        serviceCompleted: 'Usługa Zakończona',
        serviceCompletedMsg: 'Twoja usługa została zakończona',
        newMessage: 'Nowa Wiadomość',
        newMessageMsg: 'Masz nową wiadomość od {{senderName}}',
        verificationApproved: 'Weryfikacja Zatwierdzona',
        verificationApprovedMsg: 'Twoje konto eksperta zostało zweryfikowane',
        verificationRejected: 'Weryfikacja Odrzucona',
        verificationRejectedMsg: 'Twoja weryfikacja została odrzucona. Spróbuj ponownie.',
      },

      // Common
      common: {
        loading: 'Ładowanie...',
        save: 'Zapisz',
        cancel: 'Anuluj',
        confirm: 'Potwierdź',
        delete: 'Usuń',
        edit: 'Edytuj',
        close: 'Zamknij',
        back: 'Wstecz',
        next: 'Dalej',
        continue: 'Kontynuuj',
        search: 'Szukaj',
        filter: 'Filtruj',
        sort: 'Sortuj',
        showMore: 'Pokaż Więcej',
        showLess: 'Pokaż Mniej',
        readMore: 'Czytaj Więcej',
        perHour: '/godz',
        perJob: '/zlecenie',
        from: 'Od',
        to: 'do',
        km: 'km',
        minutes: 'min',
        hours: 'godz',
        days: 'dni',
        today: 'Dziś',
        tomorrow: 'Jutro',
        yesterday: 'Wczoraj',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

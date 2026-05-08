# Reedo - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, actions | Custom elastic hover, magnetic effect |
| Card | Service cards, testimonials | 3D tilt, gradient borders |
| Input | Search, forms | Focus spotlight effect |
| Dialog | Modals, confirmations | Slide-up animation |
| Avatar | User profiles | Circular crop, hover scale |
| Badge | Verified status, categories | Pulse animation for verified |
| Tabs | Dashboard navigation | Smooth indicator slide |
| Select | Filters, language switch | Custom dropdown animation |
| Calendar | Booking date picker | Range selection highlight |
| Sheet | Mobile navigation | Slide from side |
| Toast | Notifications | Slide in + auto dismiss |
| DropdownMenu | User menu, actions | Staggered reveal |
| Separator | Visual dividers | Animated draw |
| Skeleton | Loading states | Shimmer effect |
| Progress | Booking status | Animated fill |
| Slider | Price range filter | Smooth drag |
| Switch | Toggles | Elastic snap |
| Textarea | Notes, messages | Auto-resize |
| Label | Form labels | Slide in with input |
| Form | Validation | Error shake animation |
| ScrollArea | Custom scrollbars | Smooth scroll |
| Accordion | FAQ, details | Spring open/close |
| Tooltip | Hints | Fade + scale |
| Popover | Date picker, info | Fade + lift |
| NavigationMenu | Header nav | Hover underline dot |
| Command | Search palette | Keyboard navigation |
| Table | Admin data | Row hover highlight |
| Checkbox | Multi-select | Bounce check |
| RadioGroup | Single select | Scale selection |

### Third-Party Components
| Component | Source | Purpose |
|-----------|--------|---------|
| @react-bits | Animated components | Text animations, background |

### Custom Components to Build
| Component | Purpose | Complexity |
|-----------|---------|------------|
| MagneticButton | CTA with cursor attraction | Medium |
| TiltCard | 3D perspective card | High |
| AnimatedPath | SVG draw-on-scroll | Medium |
| MarqueeTrack | Infinite scroll testimonials | Medium |
| GradientMesh | WebGL background | High |
| FloatingElement | Sine-wave float wrapper | Low |
| SplitText | Word/character reveal | Medium |
| GlassCard | Frosted glass effect | Low |
| OrbitalScreens | App screenshot orbit | High |
| SearchSpotlight | Focus dim effect | Low |
| LanguageSwitch | EN/PL toggle | Low |
| StarRating | Interactive ratings | Low |
| BookingTimeline | Status progression | Medium |
| ChatInterface | Messaging UI | Medium |
| ProviderCard | Service provider display | Medium |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero text split reveal | GSAP + SplitType | Split words, staggered y/clip animation | High |
| Hero image 3D tilt | GSAP | Mouse tracking with perspective transform | Medium |
| Background gradient mesh | Three.js / React-Three-Fiber | Shader material with noise displacement | High |
| Navigation glassmorphism | CSS + React | Backdrop-filter with scroll state | Low |
| Search bar spotlight | React + CSS | Overlay opacity change on focus | Low |
| Service cards flip entrance | GSAP ScrollTrigger | Staggered rotateX from 90deg | Medium |
| Service cards parallax | GSAP ScrollTrigger | Different y speeds for even/odd | Low |
| Card hover 3D lift | GSAP | Scale + shadow expansion + z-index | Medium |
| How it works path draw | GSAP DrawSVGPlugin | stroke-dashoffset animation | Medium |
| Steps pop-in | GSAP ScrollTrigger | Scale 0 to 1 with elastic ease | Medium |
| Trust cards holographic | CSS + GSAP | Conic-gradient border + tilt glare | High |
| Testimonials marquee | CSS Animation | Infinite translateX loop | Low |
| Testimonials float | CSS Animation | Independent sine-wave transforms | Low |
| Phone mockup 3D | GSAP ScrollTrigger | RotateY + scale on scroll | Medium |
| Screenshots orbit | GSAP | Circular motion path | High |
| Footer curtain reveal | CSS | Fixed position with margin reveal | Low |
| Button magnetic pull | GSAP | Cursor tracking with spring physics | Medium |
| Page transitions | Framer Motion | AnimatePresence with slide/fade | Medium |
| Language switch | React + i18next | Smooth text crossfade | Low |

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-workers.png
│   │   ├── step-1.png
│   │   ├── step-2.png
│   │   ├── step-3.png
│   │   ├── verification.png
│   │   ├── payment.png
│   │   ├── phone-mockup.png
│   │   ├── avatars/
│   │   └── services/
│   └── locales/
│       ├── en.json
│       └── pl.json
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   ├── animations/            # Animation components
│   │   │   ├── SplitText.tsx
│   │   │   ├── FloatingElement.tsx
│   │   │   ├── TiltCard.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── AnimatedPath.tsx
│   │   │   ├── MarqueeTrack.tsx
│   │   │   └── GradientMesh.tsx
│   │   ├── shared/                # Shared components
│   │   │   ├── GlassCard.tsx
│   │   │   ├── StarRating.tsx
│   │   │   ├── LanguageSwitch.tsx
│   │   │   ├── SearchSpotlight.tsx
│   │   │   └── OrbitalScreens.tsx
│   │   ├── layout/                # Layout components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── landing/               # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── TrustSafety.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── AppDownload.tsx
│   │   ├── auth/                  # Auth components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   ├── SocialLogin.tsx
│   │   │   └── RoleSelector.tsx
│   │   ├── customer/              # Customer components
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProviderCard.tsx
│   │   │   ├── SearchFilters.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   ├── BookingTimeline.tsx
│   │   │   └── ReviewForm.tsx
│   │   ├── provider/              # Provider components
│   │   │   ├── OnboardingSteps.tsx
│   │   │   ├── ServiceSelector.tsx
│   │   │   ├── PricingSetup.tsx
│   │   │   ├── EarningsChart.tsx
│   │   │   └── JobCard.tsx
│   │   ├── messaging/             # Messaging components
│   │   │   ├── ChatList.tsx
│   │   │   ├── ChatWindow.tsx
│   │   │   └── MessageBubble.tsx
│   │   └── admin/                 # Admin components
│   │       ├── UserTable.tsx
│   │       ├── ProviderApproval.tsx
│   │       ├── BookingMonitor.tsx
│   │       └── DisputePanel.tsx
│   ├── hooks/                     # Custom hooks
│   │   ├── useMousePosition.ts
│   │   ├── useScrollVelocity.ts
│   │   ├── useInView.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useLanguage.ts
│   │   └── useAuth.ts
│   ├── lib/                       # Utilities
│   │   ├── utils.ts
│   │   ├── i18n.ts
│   │   ├── mockData.ts
│   │   ├── mockApi.ts
│   │   └── animations.ts
│   ├── pages/                     # Page components
│   │   ├── Landing.tsx
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── CustomerHome.tsx
│   │   ├── ServiceListing.tsx
│   │   ├── ProviderProfile.tsx
│   │   ├── Booking.tsx
│   │   ├── Payment.tsx
│   │   ├── CustomerDashboard.tsx
│   │   ├── ProviderOnboarding.tsx
│   │   ├── ProviderDashboard.tsx
│   │   ├── Messaging.tsx
│   │   └── AdminPanel.tsx
│   ├── store/                     # State management
│   │   ├── authStore.ts
│   │   ├── bookingStore.ts
│   │   ├── providerStore.ts
│   │   └── notificationStore.ts
│   ├── types/                     # TypeScript types
│   │   └── index.ts
│   ├── styles/                    # Global styles
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Dependencies

### Core
- react
- react-dom
- react-router-dom
- typescript
- vite

### UI
- @radix-ui/* (via shadcn)
- tailwindcss
- lucide-react
- class-variance-authority
- clsx
- tailwind-merge

### Animation
- gsap
- @gsap/react
- framer-motion
- lenis (smooth scroll)
- split-type

### 3D/WebGL
- three
- @react-three/fiber
- @react-three/drei

### Internationalization
- i18next
- react-i18next
- i18next-browser-languagedetector

### State Management
- zustand

### Forms & Validation
- react-hook-form
- zod
- @hookform/resolvers

### Date/Time
- date-fns

### Development
- @types/node
- @types/react
- @types/react-dom
- @types/three
- eslint
- autoprefixer
- postcss

## Animation Library Choices

### GSAP (Primary)
**Rationale**: Best performance for complex scroll-triggered animations, timeline control, and SVG manipulation.
- ScrollTrigger for scroll-based effects
- Flip plugin for layout transitions
- DrawSVG for path animations
- Elastic easing for bouncy effects

### Framer Motion (Secondary)
**Rationale**: Excellent for React component animations, AnimatePresence for mount/unmount.
- Page transitions
- Component state animations
- Gesture handling

### CSS Animations (Tertiary)
**Rationale**: Lightweight for simple, continuous animations.
- Marquee scroll
- Floating elements
- Gradient rotations

### Three.js / React-Three-Fiber (Specialized)
**Rationale**: Required for WebGL background and 3D interactions.
- Hero gradient mesh
- Complex 3D card effects

## Color Variables (Tailwind Config)

```javascript
colors: {
  primary: {
    DEFAULT: '#4382FF',
    dark: '#0066CC',
    light: '#E6F0FF',
  },
  accent: {
    purple: '#6B46C1',
  },
  text: {
    dark: '#1A202C',
    gray: '#4A5568',
  },
  surface: {
    light: '#F7FAFC',
    white: '#FFFFFF',
  },
  status: {
    success: '#48BB78',
    warning: '#ED8936',
  }
}
```

## Easing Functions

```javascript
const easings = {
  customElastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  smoothFlow: 'cubic-bezier(0.25, 1, 0.5, 1)',
  sharpReveal: 'cubic-bezier(0.19, 1, 0.22, 1)',
}
```

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion support
- Color contrast ratio 4.5:1 minimum

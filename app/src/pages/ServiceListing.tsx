import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import {
  Search,
  Filter,
  MapPin,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import {
  Card,
  CardContent,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';

import { Slider } from '@/components/ui/slider';

import { Checkbox } from '@/components/ui/checkbox';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Navigation } from '@/components/layout/Navigation';

import { Footer } from '@/components/layout/Footer';

import { StarRating } from '@/components/shared/StarRating';

import {
  serviceCategories,
  mockProviders,
} from '@/lib/mockData';

import type { ServiceType } from '@/types';

export function ServiceListing() {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const initialCategory =
    searchParams.get(
      'category'
    ) as ServiceType | null;

  const initialSearch =
    searchParams.get('search') || '';

  // STATES
  const [searchQuery, setSearchQuery] =
    useState(initialSearch);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState<ServiceType | null>(
    initialCategory
  );

  const [priceRange, setPriceRange] =
    useState([0, 500]);

  const [minRating, setMinRating] =
    useState(0);

  const [
    showVerifiedOnly,
    setShowVerifiedOnly,
  ] = useState(false);

  const [
    selectedLanguages,
    setSelectedLanguages,
  ] = useState<string[]>([]);

  // LANGUAGES
  const languages = [
    'Polish',
    'English',
    'Ukrainian',
    'Russian',
  ];

  // FILTER
  const filteredProviders =
    mockProviders.filter((provider) => {

      // CATEGORY
      if (
        selectedCategory &&
        !provider.services.includes(
          selectedCategory
        )
      ) {
        return false;
      }

      // SEARCH
      if (searchQuery) {

        const query =
          searchQuery.toLowerCase();

        const matchesSearch =

          provider.user.firstName
            .toLowerCase()
            .includes(query) ||

          provider.user.lastName
            .toLowerCase()
            .includes(query) ||

          provider.bio
            .toLowerCase()
            .includes(query) ||

          provider.services.some((s) =>
            t(`services.${s}`)
              .toLowerCase()
              .includes(query)
          );

        if (!matchesSearch)
          return false;
      }

      // RATING
      if (
        provider.rating < minRating
      ) {
        return false;
      }

      // VERIFIED
      if (
        showVerifiedOnly &&
        !provider.isVerified
      ) {
        return false;
      }

      // LANGUAGE
      if (
        selectedLanguages.length > 0
      ) {

        const providerLanguages =
          provider.languages || [];

        const matchesLanguage =
          selectedLanguages.some(
            (language) =>
              providerLanguages.includes(
                language
              )
          );

        if (!matchesLanguage)
          return false;
      }

      // PRICE
      const hasPrice =
        provider.pricing.some(
          (p) =>
            p.basePrice >=
              priceRange[0] &&
            p.basePrice <=
              priceRange[1]
        );

      if (!hasPrice)
        return false;

      return true;
    });

  // FILTER CONTENT
  const FilterContent = () => (

    <div className="space-y-8">

      {/* CATEGORY */}
      <div>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">

          Categories

        </h3>

        <div className="flex flex-wrap gap-2">

          <button
            onClick={() =>
              setSelectedCategory(null)
            }
            className={`rounded-full px-4 py-2 text-sm transition-all ${
              selectedCategory === null
                ? 'bg-[#5B3DF5] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)]'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All
          </button>

          {serviceCategories.map(
            (category) => (

              <button
                key={category.id}
                onClick={() =>
                  setSelectedCategory(
                    category.id
                  )
                }
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  selectedCategory ===
                  category.id
                    ? 'bg-[#5B3DF5] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >

                {t(category.nameKey)}

              </button>
            )
          )}

        </div>

      </div>

      {/* PRICE */}
      <div>

        <div className="mb-5 flex items-center justify-between">

          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">

            Price Range

          </h3>

          <div className="rounded-full bg-[#5B3DF5]/10 px-3 py-1 text-sm font-semibold text-[#5B3DF5]">

            {priceRange[0]} zł — {priceRange[1]} zł

          </div>

        </div>

        <div className="px-2">

          <Slider
            value={priceRange}
            onValueChange={(value) =>
              setPriceRange(value)
            }
            min={0}
            max={500}
            step={5}
            minStepsBetweenThumbs={10}
            className="cursor-pointer"
          />

        </div>

        <div className="mt-4 flex justify-between text-xs text-gray-400">

          <span>0 zł</span>

          <span>500 zł</span>

        </div>

      </div>

      {/* RATING */}
      <div>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">

          Minimum Rating

        </h3>

        <div className="space-y-3">

          {[4, 3, 2, 1].map(
            (rating) => (

              <div
                key={rating}
                onClick={() =>
                  setMinRating(rating)
                }
                className="flex cursor-pointer items-center gap-3"
              >

                <Checkbox
                  checked={
                    minRating === rating
                  }
                />

                <StarRating
                  rating={rating}
                  size={14}
                />

                <span className="text-sm text-gray-600">

                  & up

                </span>

              </div>
            )
          )}

        </div>

      </div>

      {/* LANGUAGES */}
      <div>

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">

          Languages Spoken

        </h3>

        <div className="flex flex-wrap gap-2">

          {languages.map((language) => {

            const active =
              selectedLanguages.includes(
                language
              );

            return (

              <button
                key={language}
                onClick={() => {

                  if (active) {

                    setSelectedLanguages(
                      selectedLanguages.filter(
                        (l) =>
                          l !== language
                      )
                    );

                  } else {

                    setSelectedLanguages([
                      ...selectedLanguages,
                      language,
                    ]);
                  }
                }}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active
                    ? 'bg-[#5B3DF5] text-white shadow-[0_10px_25px_rgba(91,61,245,0.3)]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >

                {language}

              </button>
            );
          })}

        </div>

      </div>

      {/* VERIFIED */}
      <div className="flex items-center gap-3">

        <Checkbox
          checked={showVerifiedOnly}
          onCheckedChange={(checked) =>
            setShowVerifiedOnly(
              checked as boolean
            )
          }
        />

        <span className="text-sm text-gray-600">

          Verified providers only

        </span>

      </div>

      {/* RESET */}
      <Button
        variant="outline"
        className="w-full rounded-2xl"
        onClick={() => {

          setSelectedCategory(null);

          setPriceRange([0, 500]);

          setMinRating(0);

          setShowVerifiedOnly(false);

          setSelectedLanguages([]);
        }}
      >

        Clear Filters

      </Button>

    </div>
  );

  return (
    <div className="min-h-screen bg-[#fafafa] text-black">

      {/* NAV */}
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#f6f3ff] via-white to-white px-6 pb-14 pt-36">

        {/* GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[650px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* TOP */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">

                Explore Reedo Services

              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight">

                Find Trusted Professionals

              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">

                Smart service discovery powered by Reedo.

              </p>

            </div>

            <Button
              className="h-12 rounded-2xl bg-[#5B3DF5] px-6 shadow-[0_12px_35px_rgba(91,61,245,0.35)] hover:bg-[#4c32d9]"
            >

              <Sparkles className="mr-2 h-5 w-5" />

              Ask Reedo AI

            </Button>

          </div>

          {/* SEARCH */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row">

            <div className="relative flex-1">

              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <Input
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                placeholder={t(
                  'hero.searchPlaceholder'
                )}
                className="h-14 rounded-2xl border-white bg-white pl-14 shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
              />

            </div>

            {/* MOBILE FILTER */}
            <Sheet>

              <SheetTrigger asChild>

                <Button
                  variant="outline"
                  className="h-14 rounded-2xl lg:hidden"
                >

                  <Filter className="mr-2 h-4 w-4" />

                  Filters

                </Button>

              </SheetTrigger>

              <SheetContent side="left">

                <SheetHeader>

                  <SheetTitle>
                    Filters
                  </SheetTitle>

                </SheetHeader>

                <div className="mt-8">

                  <FilterContent />

                </div>

              </SheetContent>

            </Sheet>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <main className="px-6 py-12">

        <div className="mx-auto flex max-w-7xl gap-8">

          {/* FILTERS */}
          <div className="hidden w-[280px] shrink-0 lg:block">

            <div className="sticky top-28 rounded-[30px] border border-gray-100 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

              <div className="mb-8 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-[#5B3DF5]">

                  <SlidersHorizontal className="h-5 w-5" />

                </div>

                <div>

                  <h2 className="font-semibold">
                    Filters
                  </h2>

                  <p className="text-sm text-gray-500">
                    Refine results
                  </p>

                </div>

              </div>

              <FilterContent />

            </div>

          </div>

          {/* RESULTS */}
          <div className="flex-1">

            <div className="mb-8">

              <h2 className="text-2xl font-semibold">

                {filteredProviders.length}
                {' '}
                Providers Found

              </h2>

              <p className="mt-1 text-sm text-gray-500">

                Trusted professionals near you

              </p>

            </div>

            {/* PROVIDERS */}
            <div className="grid gap-5">

              {filteredProviders.map(
                (provider) => (

                  <Card
                    key={provider.id}
                    onClick={() =>
                      navigate(
                        `/provider/${provider.id}`
                      )
                    }
                    className="cursor-pointer rounded-[30px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(91,61,245,0.08)]"
                  >

                    <CardContent className="p-6">

                      <div className="flex flex-col gap-5 sm:flex-row">

                        {/* IMAGE */}
                        <img
                          src={
                            provider.user.avatar
                          }
                          alt={`${provider.user.firstName} ${provider.user.lastName}`}
                          className="h-20 w-20 rounded-2xl object-cover"
                        />

                        {/* CONTENT */}
                        <div className="flex-1">

                          {/* TOP */}
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                            <div>

                              <h3 className="text-xl font-semibold">

                                {
                                  provider.user
                                    .firstName
                                }{' '}
                                {
                                  provider.user
                                    .lastName
                                }

                              </h3>

                              <div className="mt-2 flex items-center gap-3">

                                <StarRating
                                  rating={
                                    provider.rating
                                  }
                                  size={14}
                                />

                                <span className="text-sm text-gray-500">

                                  {
                                    provider.rating
                                  }
                                  {' '}
                                  (
                                  {
                                    provider.reviewCount
                                  }
                                  {' '}
                                  reviews)

                                </span>

                              </div>

                            </div>

                            {provider.isVerified && (

                              <Badge className="rounded-full bg-green-100 px-4 py-2 text-green-700">

                                Verified

                              </Badge>
                            )}

                          </div>

                          {/* BIO */}
                          <p className="mt-4 line-clamp-2 leading-7 text-gray-600">

                            {provider.bio}

                          </p>

                          {/* SERVICES */}
                          <div className="mt-5 flex flex-wrap gap-2">

                            {provider.services.map(
                              (service) => (

                                <Badge
                                  key={service}
                                  className="rounded-full bg-[#5B3DF5]/8 px-3 py-1 text-[#5B3DF5]"
                                >

                                  {t(
                                    `services.${service}`
                                  )}

                                </Badge>
                              )
                            )}

                            {(provider.languages ||
                              []).map(
                              (
                                language: string
                              ) => (

                                <Badge
                                  key={language}
                                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-600"
                                >

                                  {language}

                                </Badge>
                              )
                            )}

                          </div>

                          {/* BOTTOM */}
                          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

                            <div className="flex items-center gap-2 text-sm text-gray-500">

                              <MapPin className="h-4 w-4" />

                              {
                                provider.location
                                  .city
                              }

                            </div>

                            <div className="text-lg font-semibold text-[#5B3DF5]">

                              From{' '}
                              {Math.min(
                                ...provider.pricing.map(
                                  (p) =>
                                    p.basePrice
                                )
                              )}{' '}
                              zł/hr

                            </div>

                          </div>

                        </div>

                      </div>

                    </CardContent>

                  </Card>
                )
              )}

            </div>

            {/* EMPTY */}
            {filteredProviders.length ===
              0 && (

              <Card className="rounded-[32px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

                <CardContent className="flex flex-col items-center justify-center py-20">

                  <Search className="h-14 w-14 text-gray-300" />

                  <p className="mt-6 text-lg text-gray-500">

                    No providers found

                  </p>

                  <p className="mt-2 text-sm text-gray-400">

                    Try adjusting your filters

                  </p>

                </CardContent>

              </Card>
            )}

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
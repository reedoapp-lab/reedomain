import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Navigation } from '@/components/layout/Navigation';
import { StarRating } from '@/components/shared/StarRating';
import { serviceCategories, mockProviders } from '@/lib/mockData';
import type { ServiceType } from '@/types';

export function ServiceListing() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as ServiceType | null;
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<ServiceType | null>(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  // Filter providers
  const filteredProviders = mockProviders.filter((provider) => {
    // Category filter
    if (selectedCategory && !provider.services.includes(selectedCategory)) {
      return false;
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        provider.user.firstName.toLowerCase().includes(query) ||
        provider.user.lastName.toLowerCase().includes(query) ||
        provider.services.some(s => t(`services.${s}`).toLowerCase().includes(query)) ||
        provider.bio.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    
    // Rating filter
    if (provider.rating < minRating) return false;
    
    // Verified filter
    if (showVerifiedOnly && !provider.isVerified) return false;
    
    // Price filter - check if any service is within range
    const hasServiceInPriceRange = provider.pricing.some(
      (p) => p.basePrice >= priceRange[0] && p.basePrice <= priceRange[1]
    );
    if (!hasServiceInPriceRange) return false;
    
    return true;
  });

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-3 font-semibold">{t('customer.search.filters')}</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={selectedCategory === null}
              onCheckedChange={() => setSelectedCategory(null)}
            />
            <span className="text-sm">All Categories</span>
          </div>
          {serviceCategories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                checked={selectedCategory === category.id}
                onCheckedChange={() => setSelectedCategory(category.id)}
              />
              <span className="text-sm">{t(category.nameKey)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-3 font-semibold">{t('customer.search.priceRange')}</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={500}
          step={10}
        />
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>{priceRange[0]} zł</span>
          <span>{priceRange[1]} zł</span>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="mb-3 font-semibold">{t('customer.search.rating')}</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div
              key={rating}
              className="flex cursor-pointer items-center gap-2"
              onClick={() => setMinRating(rating)}
            >
              <Checkbox checked={minRating === rating} />
              <StarRating rating={rating} size={14} />
              <span className="text-sm text-gray-600">& up</span>
            </div>
          ))}
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => setMinRating(0)}
          >
            <Checkbox checked={minRating === 0} />
            <span className="text-sm">Any rating</span>
          </div>
        </div>
      </div>

      {/* Verified Only */}
      <div className="flex items-center gap-2">
        <Checkbox
          checked={showVerifiedOnly}
          onCheckedChange={(checked) => setShowVerifiedOnly(checked as boolean)}
        />
        <span className="text-sm">Verified providers only</span>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategory(null);
          setPriceRange([0, 500]);
          setMinRating(0);
          setShowVerifiedOnly(false);
        }}
      >
        {t('customer.search.clearFilters')}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {t('customer.home.title')}
            </h1>
            <p className="mt-2 text-gray-600">
              {filteredProviders.length} {t('customer.search.results')}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('hero.searchPlaceholder')}
                className="pl-10"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="mr-2 h-4 w-4" />
                  {t('customer.search.filters')}
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>{t('customer.search.filters')}</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex gap-8">
            {/* Filters - Desktop */}
            <div className="hidden w-64 shrink-0 lg:block">
              <Card>
                <CardContent className="p-6">
                  <FilterContent />
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="flex-1">
              <div className="grid gap-4">
                {filteredProviders.map((provider) => (
                  <Card
                    key={provider.id}
                    className="cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
                    onClick={() => navigate(`/provider/${provider.id}`)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        {/* Avatar */}
                        <img
                          src={provider.user.avatar}
                          alt={`${provider.user.firstName} ${provider.user.lastName}`}
                          className="h-20 w-20 rounded-full object-cover"
                        />

                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {provider.user.firstName} {provider.user.lastName}
                              </h3>
                              <div className="mt-1 flex items-center gap-2">
                                <StarRating rating={provider.rating} size={14} />
                                <span className="text-sm text-gray-600">
                                  {provider.rating} ({provider.reviewCount} {t('customer.provider.reviews')})
                                </span>
                              </div>
                            </div>
                            {provider.isVerified && (
                              <Badge className="bg-green-100 text-green-800">
                                {t('customer.provider.verified')}
                              </Badge>
                            )}
                          </div>

                          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                            {provider.bio}
                          </p>

                          {/* Services */}
                          <div className="mt-3 flex flex-wrap gap-2">
                            {provider.services.map((service) => (
                              <Badge
                                key={service}
                                variant="secondary"
                                className="text-xs"
                              >
                                {t(`services.${service}`)}
                              </Badge>
                            ))}
                          </div>

                          {/* Pricing & Location */}
                          <div className="mt-4 flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <MapPin className="h-4 w-4" />
                              {provider.location.city}
                            </div>
                            <div className="text-sm font-medium text-[#4382FF]">
                              {t('common.from')}{' '}
                              {Math.min(...provider.pricing.map((p) => p.basePrice))} zł
                              {t('common.perHour')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProviders.length === 0 && (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Search className="h-12 w-12 text-gray-300" />
                    <p className="mt-4 text-gray-500">No providers found</p>
                    <p className="text-sm text-gray-400">Try adjusting your filters</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

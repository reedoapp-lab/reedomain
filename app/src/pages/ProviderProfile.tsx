import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, CheckCircle, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Navigation } from '@/components/layout/Navigation';
import { StarRating } from '@/components/shared/StarRating';
import { mockProviders, mockReviews } from '@/lib/mockData';
import { format } from 'date-fns';

export function ProviderProfile() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const provider = mockProviders.find((p) => p.id === id);
  const reviews = mockReviews.filter((r) => r.providerId === id);

  if (!provider) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-20">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center">
            <p>Provider not found</p>
          </div>
        </main>
      </div>
    );
  }

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
  ];

  const handleBook = () => {
    if (selectedDate && selectedTime) {
      navigate('/booking', {
        state: {
          providerId: provider.id,
          serviceType: provider.services[0],
          date: selectedDate,
          time: selectedTime,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-start gap-6">
                  <img
                    src={provider.user.avatar}
                    alt={`${provider.user.firstName} ${provider.user.lastName}`}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {provider.user.firstName} {provider.user.lastName}
                      </h1>
                      {provider.isVerified && (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          {t('customer.provider.verified')}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <StarRating rating={provider.rating} />
                      <span className="text-gray-600">
                        {provider.rating} ({provider.reviewCount} {t('customer.provider.reviews')})
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {provider.location.city}, {provider.location.address}
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-gray-700">{provider.bio}</p>

                {/* Services */}
                <div className="mt-6">
                  <h3 className="mb-3 font-semibold">{t('customer.provider.services')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {provider.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {t(`services.${service}`)}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-6">
                  <h3 className="mb-3 font-semibold">{t('customer.provider.pricing')}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {provider.pricing.map((price) => (
                      <Card key={price.serviceType}>
                        <CardContent className="flex items-center justify-between p-4">
                          <span>{t(`services.${price.serviceType}`)}</span>
                          <span className="font-semibold text-[#4382FF]">
                            {price.basePrice} zł/{t(`common.per${price.unit === 'hour' ? 'Hour' : 'Job'}`)}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <Card className="w-full lg:w-80">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">{t('customer.booking.title')}</h3>
                  
                  {/* Calendar */}
                  <div className="mb-4">
                    <label className="mb-2 block text-sm font-medium">
                      {t('customer.booking.selectDate')}
                    </label>
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div className="mb-4">
                      <label className="mb-2 block text-sm font-medium">
                        {t('customer.booking.selectTime')}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-md px-3 py-2 text-sm ${
                              selectedTime === time
                                ? 'bg-[#4382FF] text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full bg-[#4382FF] hover:bg-[#0066CC]"
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleBook}
                  >
                    {t('customer.provider.bookNow')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList>
              <TabsTrigger value="about">{t('customer.provider.about')}</TabsTrigger>
              <TabsTrigger value="reviews">
                {t('customer.provider.reviews')} ({reviews.length})
              </TabsTrigger>
              <TabsTrigger value="availability">{t('customer.provider.availability')}</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">About {provider.user.firstName}</h3>
                  <p className="text-gray-700">{provider.bio}</p>
                  
                  {provider.photos.length > 0 && (
                    <div className="mt-6">
                      <h4 className="mb-3 font-medium">Work Photos</h4>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {provider.photos.map((photo, index) => (
                          <img
                            key={index}
                            src={photo}
                            alt={`Work ${index + 1}`}
                            className="h-48 w-full rounded-lg object-cover"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6 space-y-4">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.customer.avatar}
                          alt={review.customer.firstName}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">
                                {review.customer.firstName} {review.customer.lastName}
                              </p>
                              <p className="text-sm text-gray-500">
                                {format(review.createdAt, 'MMM d, yyyy')}
                              </p>
                            </div>
                            <StarRating rating={review.rating} />
                          </div>
                          <p className="mt-3 text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Star className="mx-auto h-12 w-12 text-gray-300" />
                    <p className="mt-4 text-gray-500">No reviews yet</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="availability" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Weekly Availability</h3>
                  <div className="space-y-3">
                    {provider.availability.map((slot, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                      >
                        <span className="font-medium">
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][slot.dayOfWeek - 1]}
                        </span>
                        <span className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          {slot.startTime} - {slot.endTime}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

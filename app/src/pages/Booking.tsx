import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, FileText, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navigation } from '@/components/layout/Navigation';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import { mockProviders } from '@/lib/mockData';
import { format } from 'date-fns';

export function Booking() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthStore();
  const { createBooking } = useBookingStore();

  const { providerId, serviceType, date, time } = location.state || {};
  const provider = mockProviders.find((p) => p.id === providerId);

  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!provider || !date || !time) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-20">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center">
            <p>Invalid booking data</p>
            <Button onClick={() => navigate('/services')} className="mt-4">
              Browse Services
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const servicePrice = provider.pricing.find((p) => p.serviceType === serviceType);
  const estimatedPrice = servicePrice?.basePrice || 0;

  const handleSubmit = async () => {
    if (!user || !address) return;

    setIsSubmitting(true);
    
    const booking = await createBooking({
      customerId: user.id,
      customer: user,
      providerId: provider.id,
      provider: provider,
      serviceType,
      scheduledDate: new Date(date),
      scheduledTime: time,
      address,
      notes,
      price: estimatedPrice,
    });

    setIsSubmitting(false);

    if (booking) {
      navigate('/payment', { state: { bookingId: booking.id, amount: estimatedPrice } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('customer.booking.title')}</h1>

          {/* Progress Steps */}
          <div className="mb-8 mt-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4382FF] text-sm font-bold text-white">
              1
            </div>
            <span className="text-sm font-medium">Details</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
              2
            </div>
            <span className="text-sm text-gray-600">Payment</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
              3
            </div>
            <span className="text-sm text-gray-600">Confirmation</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Address */}
                    <div>
                      <Label htmlFor="address">
                        {t('customer.booking.address')} *
                      </Label>
                      <div className="relative mt-2">
                        <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Enter your address"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <Label htmlFor="notes">{t('customer.booking.notes')}</Label>
                      <div className="relative mt-2">
                        <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Textarea
                          id="notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder={t('customer.booking.notesPlaceholder')}
                          className="min-h-[100px] pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">{t('customer.booking.summary')}</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={provider.user.avatar}
                        alt={provider.user.firstName}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">
                          {provider.user.firstName} {provider.user.lastName}
                        </p>
                        <p className="text-sm text-gray-500">
                          {t(`services.${serviceType}`)}
                        </p>
                      </div>
                    </div>

                    <hr />

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(date), 'MMM d, yyyy')}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        {time}
                      </div>
                      {address && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          {address}
                        </div>
                      )}
                    </div>

                    <hr />

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{t('customer.booking.total')}</span>
                      <span className="text-xl font-bold">{estimatedPrice} zł</span>
                    </div>

                    <Button
                      className="w-full bg-[#4382FF] hover:bg-[#0066CC]"
                      disabled={!address || isSubmitting}
                      onClick={handleSubmit}
                    >
                      {isSubmitting ? 'Processing...' : t('customer.booking.confirm')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, MessageSquare, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/layout/Navigation';
import { StarRating } from '@/components/shared/StarRating';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import { format } from 'date-fns';

export function CustomerDashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { getCustomerBookings } = useBookingStore();

  const bookings = user ? getCustomerBookings(user.id) : [];

  const upcomingBookings = bookings.filter(
    (b) => b.status === 'confirmed' || b.status === 'provider_assigned'
  );
  const completedBookings = bookings.filter((b) => b.status === 'completed');
  const cancelledBookings = bookings.filter((b) => b.status === 'cancelled');

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      searching_provider: 'bg-blue-100 text-blue-800',
      provider_assigned: 'bg-purple-100 text-purple-800',
      confirmed: 'bg-green-100 text-green-800',
      in_progress: 'bg-orange-100 text-orange-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  const BookingCard = ({ booking }: { booking: typeof bookings[0] }) => (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4382FF]/10">
              <Calendar className="h-6 w-6 text-[#4382FF]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {t(`services.${booking.serviceType}`)}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {format(booking.scheduledDate, 'MMM d, yyyy')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {booking.scheduledTime}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                {booking.address}
              </div>
              {booking.provider && (
                <div className="mt-2 flex items-center gap-2">
                  <img
                    src={booking.provider.user.avatar}
                    alt={booking.provider.user.firstName}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-sm">
                    {booking.provider.user.firstName} {booking.provider.user.lastName}
                  </span>
                  <StarRating rating={booking.provider.rating} size={12} />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <Badge className={getStatusBadge(booking.status)}>
              {booking.status.replace('_', ' ')}
            </Badge>
            {booking.price && (
              <span className="text-lg font-semibold">{booking.price} zł</span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-wrap gap-2">
          {booking.status === 'confirmed' && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/messages?booking=${booking.id}`)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                {t('customer.provider.contact')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:bg-red-50"
                onClick={() => {}}
              >
                {t('customer.dashboard.cancel')}
              </Button>
            </>
          )}
          {booking.status === 'completed' && (
            <>
              <Button
                size="sm"
                onClick={() => navigate(`/review?booking=${booking.id}`)}
              >
                <Star className="mr-2 h-4 w-4" />
                {t('customer.dashboard.review')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/services?category=${booking.serviceType}`)}
              >
                {t('customer.dashboard.rebook')}
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {t('customer.dashboard.title')}
            </h1>
            <p className="mt-2 text-gray-600">
              Welcome back, {user?.firstName}!
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              className="cursor-pointer transition-shadow hover:shadow-lg"
              onClick={() => navigate('/services')}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4382FF]/10">
                  <Calendar className="h-6 w-6 text-[#4382FF]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Book Service</p>
                  <p className="font-semibold">Find a Pro</p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
              </CardContent>
            </Card>
            
            <Card
              className="cursor-pointer transition-shadow hover:shadow-lg"
              onClick={() => navigate('/messages')}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Messages</p>
                  <p className="font-semibold">Chat with Pros</p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
              </CardContent>
            </Card>
          </div>

          {/* Bookings Tabs */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">
                {t('customer.dashboard.upcoming')} ({upcomingBookings.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                {t('customer.dashboard.completed')} ({completedBookings.length})
              </TabsTrigger>
              <TabsTrigger value="cancelled">
                {t('customer.dashboard.cancelled')} ({cancelledBookings.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Calendar className="h-12 w-12 text-gray-300" />
                    <p className="mt-4 text-gray-500">{t('customer.dashboard.noBookings')}</p>
                    <Button
                      className="mt-4 bg-[#4382FF]"
                      onClick={() => navigate('/services')}
                    >
                      Book a Service
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedBookings.length > 0 ? (
                completedBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Star className="h-12 w-12 text-gray-300" />
                    <p className="mt-4 text-gray-500">No completed bookings yet</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-4">
              {cancelledBookings.length > 0 ? (
                cancelledBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <p className="text-gray-500">No cancelled bookings</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

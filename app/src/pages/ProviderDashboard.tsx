import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, Clock, MapPin, MessageSquare, DollarSign, 
  TrendingUp, CheckCircle, XCircle, Play, Check 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/layout/Navigation';
import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';
import { format } from 'date-fns';

export function ProviderDashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { getProviderBookings, updateBookingStatus } = useBookingStore();

  // Mock provider ID - in real app, get from provider profile
  const providerId = '1';
  const bookings = getProviderBookings(providerId);

  const incomingRequests = bookings.filter((b) => b.status === 'searching_provider');
  const activeJobs = bookings.filter(
    (b) => b.status === 'confirmed' || b.status === 'in_progress'
  );
  const completedJobs = bookings.filter((b) => b.status === 'completed');

  // Mock earnings
  const earnings = {
    total: 15420,
    thisMonth: 3240,
    pending: 890,
  };

  const handleAccept = (bookingId: string) => {
    updateBookingStatus(bookingId, 'confirmed');
  };

  const handleReject = (bookingId: string) => {
    updateBookingStatus(bookingId, 'cancelled');
  };

  const handleStart = (bookingId: string) => {
    updateBookingStatus(bookingId, 'in_progress');
  };

  const handleComplete = (bookingId: string) => {
    updateBookingStatus(bookingId, 'completed');
  };

  const JobCard = ({ booking, actions }: { booking: typeof bookings[0]; actions?: React.ReactNode }) => (
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
              {booking.customer && (
                <div className="mt-2 flex items-center gap-2">
                  <img
                    src={booking.customer.avatar}
                    alt={booking.customer.firstName}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-sm">
                    {booking.customer.firstName} {booking.customer.lastName}
                  </span>
                </div>
              )}
              {booking.notes && (
                <p className="mt-2 text-sm text-gray-600 italic">
                  "{booking.notes}"
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <Badge className="bg-blue-100 text-blue-800">
              {booking.status.replace('_', ' ')}
            </Badge>
            {booking.price && (
              <span className="text-lg font-semibold">{booking.price} zł</span>
            )}
          </div>
        </div>

        {/* Actions */}
        {actions && <div className="mt-4 flex flex-wrap gap-2">{actions}</div>}
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
              {t('provider.dashboard.title')}
            </h1>
            <p className="mt-2 text-gray-600">
              Welcome back, {user?.firstName}!
            </p>
          </div>

          {/* Earnings Overview */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('provider.dashboard.totalEarnings')}</p>
                  <p className="text-2xl font-bold">{earnings.total} zł</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('provider.dashboard.thisMonth')}</p>
                  <p className="text-2xl font-bold">{earnings.thisMonth} zł</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('provider.dashboard.pendingPayout')}</p>
                  <p className="text-2xl font-bold">{earnings.pending} zł</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Jobs Tabs */}
          <Tabs defaultValue="incoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="incoming">
                {t('provider.dashboard.incoming')} ({incomingRequests.length})
              </TabsTrigger>
              <TabsTrigger value="active">
                {t('provider.dashboard.active')} ({activeJobs.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                {t('provider.dashboard.completed')} ({completedJobs.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="incoming" className="space-y-4">
              {incomingRequests.length > 0 ? (
                incomingRequests.map((booking) => (
                  <JobCard
                    key={booking.id}
                    booking={booking}
                    actions={
                      <>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleAccept(booking.id)}
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          {t('provider.dashboard.accept')}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:bg-red-50"
                          onClick={() => handleReject(booking.id)}
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          {t('provider.dashboard.reject')}
                        </Button>
                      </>
                    }
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <CheckCircle className="h-12 w-12 text-gray-300" />
                    <p className="mt-4 text-gray-500">No incoming requests</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="active" className="space-y-4">
              {activeJobs.length > 0 ? (
                activeJobs.map((booking) => (
                  <JobCard
                    key={booking.id}
                    booking={booking}
                    actions={
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/messages?booking=${booking.id}`)}
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          {t('customer.provider.contact')}
                        </Button>
                        {booking.status === 'confirmed' ? (
                          <Button
                            size="sm"
                            className="bg-[#4382FF]"
                            onClick={() => handleStart(booking.id)}
                          >
                            <Play className="mr-2 h-4 w-4" />
                            {t('provider.dashboard.start')}
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleComplete(booking.id)}
                          >
                            <Check className="mr-2 h-4 w-4" />
                            {t('provider.dashboard.complete')}
                          </Button>
                        )}
                      </>
                    }
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Play className="h-12 w-12 text-gray-300" />
                    <p className="mt-4 text-gray-500">No active jobs</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedJobs.length > 0 ? (
                completedJobs.map((booking) => (
                  <JobCard key={booking.id} booking={booking} />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Check className="h-12 w-12 text-gray-300" />
                    <p className="mt-4 text-gray-500">No completed jobs yet</p>
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

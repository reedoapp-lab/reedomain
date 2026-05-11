import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  ChevronRight,
  Star,
  Sparkles,
  Wrench,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

import { Badge } from '@/components/ui/badge';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

import { StarRating } from '@/components/shared/StarRating';

import { useAuthStore } from '@/store/authStore';
import { useBookingStore } from '@/store/bookingStore';

import { format } from 'date-fns';

export function CustomerDashboard() {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { user } = useAuthStore();

  const { getCustomerBookings } =
    useBookingStore();

  const bookings = user
    ? getCustomerBookings(user.id)
    : [];

  const upcomingBookings =
    bookings.filter(
      (b) =>
        b.status === 'confirmed' ||
        b.status === 'provider_assigned'
    );

  const completedBookings =
    bookings.filter(
      (b) => b.status === 'completed'
    );

  const cancelledBookings =
    bookings.filter(
      (b) => b.status === 'cancelled'
    );

  const getStatusBadge =
    (status: string) => {

      const styles:
        Record<string, string> = {

        pending:
          'bg-yellow-100 text-yellow-800',

        searching_provider:
          'bg-blue-100 text-blue-800',

        provider_assigned:
          'bg-[#5B3DF5]/10 text-[#5B3DF5]',

        confirmed:
          'bg-green-100 text-green-800',

        in_progress:
          'bg-orange-100 text-orange-800',

        completed:
          'bg-gray-100 text-gray-800',

        cancelled:
          'bg-red-100 text-red-800',
      };

      return (
        styles[status] ||
        'bg-gray-100 text-gray-800'
      );
    };

  // BOOKING CARD
  const BookingCard = ({
    booking,
  }: {
    booking: typeof bookings[0];
  }) => (

    <Card className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-[1px] hover:shadow-[0_20px_60px_rgba(91,61,245,0.08)]">

      <CardContent className="p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="flex gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-[#5B3DF5]">

              <Calendar className="h-7 w-7" />

            </div>

            <div>

              <h3 className="text-xl font-semibold text-black">

                {t(
                  `services.${booking.serviceType}`
                )}

              </h3>

              {/* DATE */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">

                <span className="flex items-center gap-2">

                  <Calendar className="h-4 w-4" />

                  {format(
                    booking.scheduledDate,
                    'MMM d, yyyy'
                  )}

                </span>

                <span className="flex items-center gap-2">

                  <Clock className="h-4 w-4" />

                  {booking.scheduledTime}

                </span>

              </div>

              {/* ADDRESS */}
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                <MapPin className="h-4 w-4" />

                {booking.address}

              </div>

              {/* PROVIDER */}
              {booking.provider && (

                <div className="mt-5 flex items-center gap-3">

                  <img
                    src={
                      booking.provider.user.avatar
                    }
                    alt={
                      booking.provider.user
                        .firstName
                    }
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div>

                    <p className="font-medium text-black">

                      {
                        booking.provider.user
                          .firstName
                      }{' '}
                      {
                        booking.provider.user
                          .lastName
                      }

                    </p>

                    <div className="mt-1">

                      <StarRating
                        rating={
                          booking.provider
                            .rating
                        }
                        size={12}
                      />

                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start gap-3 lg:items-end">

            <Badge
              className={`${getStatusBadge(
                booking.status
              )} rounded-full px-4 py-2 text-xs font-medium capitalize`}
            >

              {booking.status.replace(
                '_',
                ' '
              )}

            </Badge>

            {booking.price && (

              <div className="text-2xl font-semibold text-black">

                {booking.price} zł

              </div>
            )}

          </div>

        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-wrap gap-3">

          {booking.status ===
            'confirmed' && (
            <>
              <Button
                variant="outline"
                className="rounded-2xl"
                size="sm"
                onClick={() =>
                  navigate(
                    `/messages?booking=${booking.id}`
                  )
                }
              >

                <MessageSquare className="mr-2 h-4 w-4" />

                {
                  t(
                    'customer.provider.contact'
                  )
                }

              </Button>

              <Button
                variant="outline"
                size="sm"
                className="rounded-2xl border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => {}}
              >

                {
                  t(
                    'customer.dashboard.cancel'
                  )
                }

              </Button>
            </>
          )}

          {booking.status ===
            'completed' && (
            <>
              <Button
                size="sm"
                className="rounded-2xl bg-[#5B3DF5] hover:bg-[#4c32d9]"
                onClick={() =>
                  navigate(
                    `/review?booking=${booking.id}`
                  )
                }
              >

                <Star className="mr-2 h-4 w-4" />

                {
                  t(
                    'customer.dashboard.review'
                  )
                }

              </Button>

              <Button
                variant="outline"
                size="sm"
                className="rounded-2xl"
                onClick={() =>
                  navigate(
                    `/services?category=${booking.serviceType}`
                  )
                }
              >

                {
                  t(
                    'customer.dashboard.rebook'
                  )
                }

              </Button>
            </>
          )}

        </div>

      </CardContent>

    </Card>
  );

  return (
    <div className="min-h-screen bg-[#fafafa] text-black">

      {/* NAV */}
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#f6f3ff] via-white to-white px-6 pb-20 pt-36">

        {/* GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">

                Reedo Dashboard

              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight">

                Welcome back,
                {' '}
                {user?.firstName}

              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">

                Manage your bookings,
                connect with professionals,
                and explore smart services powered by Reedo.

              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4 sm:flex-row">

              <Button
                className="h-12 rounded-2xl bg-[#5B3DF5] px-6 shadow-[0_12px_35px_rgba(91,61,245,0.35)] hover:bg-[#4c32d9]"
                onClick={() =>
                  navigate('/services')
                }
              >

                <Wrench className="mr-2 h-5 w-5" />

                Explore Services

              </Button>

              <Button
                variant="outline"
                className="h-12 rounded-2xl border-[#5B3DF5]/20 bg-white px-6 text-[#5B3DF5] hover:bg-[#faf7ff]"
              >

                <Sparkles className="mr-2 h-5 w-5" />

                Chat With Reedo AI

              </Button>

            </div>

          </div>

          {/* STATS */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                label: 'Upcoming',
                value:
                  upcomingBookings.length,
              },
              {
                label: 'Completed',
                value:
                  completedBookings.length,
              },
              {
                label: 'Cancelled',
                value:
                  cancelledBookings.length,
              },
              {
                label: 'Total',
                value: bookings.length,
              },
            ].map((item) => (

              <div
                key={item.label}
                className="rounded-[28px] border border-white bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
              >

                <p className="text-sm text-gray-500">
                  {item.label}
                </p>

                <h3 className="mt-3 text-4xl font-semibold">
                  {item.value}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <main className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          {/* QUICK ACTIONS */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* SERVICES */}
            <Card
              className="cursor-pointer rounded-[30px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(91,61,245,0.08)]"
              onClick={() =>
                navigate('/services')
              }
            >

              <CardContent className="flex items-center gap-5 p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-[#5B3DF5]">

                  <Calendar className="h-7 w-7" />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Book Service
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    Find a Professional
                  </p>

                </div>

                <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />

              </CardContent>

            </Card>

            {/* MESSAGES */}
            <Card
              className="cursor-pointer rounded-[30px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-[2px] hover:shadow-[0_20px_60px_rgba(91,61,245,0.08)]"
              onClick={() =>
                navigate('/messages')
              }
            >

              <CardContent className="flex items-center gap-5 p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">

                  <MessageSquare className="h-7 w-7" />

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Messages
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    Chat with Providers
                  </p>

                </div>

                <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />

              </CardContent>

            </Card>

            {/* AI */}
            <Card className="rounded-[30px] border border-[#5B3DF5]/10 bg-gradient-to-b from-[#faf7ff] to-white shadow-[0_20px_60px_rgba(91,61,245,0.08)]">

              <CardContent className="p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-[#5B3DF5]">

                    <Sparkles className="h-7 w-7" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Reedo AI
                    </p>

                    <h3 className="text-xl font-semibold">
                      Smart Assistance
                    </h3>

                  </div>

                </div>

                <p className="mt-5 leading-8 text-gray-600">

                  Explain problems,
                  upload photos,
                  and let Reedo AI
                  help you instantly.

                </p>

              </CardContent>

            </Card>

          </div>

          {/* BOOKINGS */}
          <Tabs
            defaultValue="upcoming"
            className="w-full"
          >

            <TabsList className="mb-10 h-auto rounded-2xl border border-gray-100 bg-white p-2 shadow-sm">

              <TabsTrigger
                value="upcoming"
                className="rounded-xl px-5 py-3"
              >

                {
                  t(
                    'customer.dashboard.upcoming'
                  )
                }
                {' '}
                (
                {
                  upcomingBookings.length
                }
                )

              </TabsTrigger>

              <TabsTrigger
                value="completed"
                className="rounded-xl px-5 py-3"
              >

                {
                  t(
                    'customer.dashboard.completed'
                  )
                }
                {' '}
                (
                {
                  completedBookings.length
                }
                )

              </TabsTrigger>

              <TabsTrigger
                value="cancelled"
                className="rounded-xl px-5 py-3"
              >

                {
                  t(
                    'customer.dashboard.cancelled'
                  )
                }
                {' '}
                (
                {
                  cancelledBookings.length
                }
                )

              </TabsTrigger>

            </TabsList>

            {/* UPCOMING */}
            <TabsContent
              value="upcoming"
              className="space-y-6"
            >

              {upcomingBookings.length >
              0 ? (

                upcomingBookings.map(
                  (booking) => (
                    <BookingCard
                      key={booking.id}
                      booking={booking}
                    />
                  )
                )

              ) : (

                <Card className="rounded-[32px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

                  <CardContent className="flex flex-col items-center justify-center py-20">

                    <Calendar className="h-14 w-14 text-gray-300" />

                    <p className="mt-6 text-lg text-gray-500">

                      {
                        t(
                          'customer.dashboard.noBookings'
                        )
                      }

                    </p>

                    <Button
                      className="mt-8 rounded-2xl bg-[#5B3DF5] px-6 hover:bg-[#4c32d9]"
                      onClick={() =>
                        navigate(
                          '/services'
                        )
                      }
                    >

                      Book a Service

                    </Button>

                  </CardContent>

                </Card>
              )}

            </TabsContent>

            {/* COMPLETED */}
            <TabsContent
              value="completed"
              className="space-y-6"
            >

              {completedBookings.length >
              0 ? (

                completedBookings.map(
                  (booking) => (
                    <BookingCard
                      key={booking.id}
                      booking={booking}
                    />
                  )
                )

              ) : (

                <Card className="rounded-[32px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

                  <CardContent className="flex flex-col items-center justify-center py-20">

                    <Star className="h-14 w-14 text-gray-300" />

                    <p className="mt-6 text-lg text-gray-500">

                      No completed bookings yet

                    </p>

                  </CardContent>

                </Card>
              )}

            </TabsContent>

            {/* CANCELLED */}
            <TabsContent
              value="cancelled"
              className="space-y-6"
            >

              {cancelledBookings.length >
              0 ? (

                cancelledBookings.map(
                  (booking) => (
                    <BookingCard
                      key={booking.id}
                      booking={booking}
                    />
                  )
                )

              ) : (

                <Card className="rounded-[32px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

                  <CardContent className="flex flex-col items-center justify-center py-20">

                    <p className="text-lg text-gray-500">

                      No cancelled bookings

                    </p>

                  </CardContent>

                </Card>
              )}

            </TabsContent>

          </Tabs>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
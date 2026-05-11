import {
  useState,
  useRef,
  useEffect,
} from 'react';

import { useTranslation } from 'react-i18next';

import {
  useSearchParams,
} from 'react-router-dom';

import {
  Send,
  Phone,
  Video,
  MoreVertical,
  ChevronLeft,
  Sparkles,
  Search,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

import {
  Card,
  CardContent,
} from '@/components/ui/card';

import { Navigation } from '@/components/layout/Navigation';

import { Footer } from '@/components/layout/Footer';

import {
  mockMessages,
  mockBookings,
  mockUsers,
} from '@/lib/mockData';

import { format } from 'date-fns';

export function Messaging() {

  const { t } = useTranslation();

  const [searchParams] =
    useSearchParams();

  const bookingId =
    searchParams.get('booking');

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const [
    selectedBookingId,
    setSelectedBookingId,
  ] = useState<string | null>(
    bookingId
  );

  const [newMessage, setNewMessage] =
    useState('');

  const [messages, setMessages] =
    useState(mockMessages);

  // BOOKINGS
  const chatBookings = Array.from(
    new Set(
      mockMessages.map(
        (m) => m.bookingId
      )
    )
  )
    .map((id) =>
      mockBookings.find(
        (b) => b.id === id
      )
    )
    .filter(Boolean);

  const selectedBooking =
    mockBookings.find(
      (b) => b.id === selectedBookingId
    );

  const chatMessages =
    messages.filter(
      (m) =>
        m.bookingId ===
        selectedBookingId
    );

  // SCROLL
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });

  }, [chatMessages]);

  // SEND
  const handleSend = () => {

    if (
      !newMessage.trim() ||
      !selectedBookingId
    )
      return;

    const message = {
      id: String(Date.now()),

      bookingId: selectedBookingId,

      senderId: '1',

      sender: mockUsers[0],

      content: newMessage,

      createdAt: new Date(),

      isRead: false,
    };

    setMessages([
      ...messages,
      message,
    ]);

    setNewMessage('');
  };

  // OTHER PARTY
  const getOtherParty = (
    booking: typeof selectedBooking
  ) => {

    if (!booking) return null;

    return (
      booking.provider?.user ||
      booking.customer
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-black">

      {/* NAV */}
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#f6f3ff] via-white to-white px-6 pb-14 pt-36">

        {/* GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[650px] -translate-x-1/2 rounded-full bg-[#5B3DF5]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">

                Reedo Messaging

              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight">

                Conversations

              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">

                Chat with professionals,
                discuss problems,
                and manage your bookings.

              </p>

            </div>

            {/* AI BUTTON */}
            <Button className="h-12 rounded-2xl bg-[#5B3DF5] px-6 shadow-[0_12px_35px_rgba(91,61,245,0.35)] hover:bg-[#4c32d9]">

              <Sparkles className="mr-2 h-5 w-5" />

              Ask Reedo AI

            </Button>

          </div>

        </div>

      </section>

      {/* CHAT */}
      <main className="px-6 py-10">

        <div className="mx-auto max-w-7xl">

          <Card className="overflow-hidden rounded-[34px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

            <div className="flex h-[78vh]">

              {/* SIDEBAR */}
              <div className="hidden w-[340px] shrink-0 border-r border-gray-100 bg-[#fcfcfc] lg:flex lg:flex-col">

                {/* HEADER */}
                <div className="border-b border-gray-100 p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <h2 className="text-2xl font-semibold">
                        Messages
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Your recent chats
                      </p>

                    </div>

                  </div>

                  {/* SEARCH */}
                  <div className="relative mt-5">

                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                    <Input
                      placeholder="Search chats..."
                      className="h-11 rounded-2xl border-gray-100 bg-white pl-11"
                    />

                  </div>

                </div>

                {/* CHAT LIST */}
                <div className="flex-1 overflow-y-auto p-3">

                  <div className="space-y-2">

                    {chatBookings.map(
                      (booking) => {

                        const otherParty =
                          getOtherParty(
                            booking
                          );

                        const lastMessage =
                          messages
                            .filter(
                              (m) =>
                                m.bookingId ===
                                booking?.id
                            )
                            .sort(
                              (a, b) =>
                                b.createdAt.getTime() -
                                a.createdAt.getTime()
                            )[0];

                        return (

                          <button
                            key={booking?.id}
                            onClick={() =>
                              setSelectedBookingId(
                                booking?.id ||
                                  null
                              )
                            }
                            className={`w-full rounded-2xl border p-4 text-left transition-all ${
                              selectedBookingId ===
                              booking?.id
                                ? 'border-[#5B3DF5]/20 bg-[#faf7ff]'
                                : 'border-transparent hover:bg-gray-50'
                            }`}
                          >

                            <div className="flex items-start gap-3">

                              <Avatar className="h-12 w-12 rounded-2xl">

                                <AvatarImage
                                  src={
                                    otherParty?.avatar
                                  }
                                />

                                <AvatarFallback>

                                  {
                                    otherParty
                                      ?.firstName?.[0]
                                  }

                                </AvatarFallback>

                              </Avatar>

                              <div className="min-w-0 flex-1">

                                <div className="flex items-center justify-between gap-2">

                                  <p className="truncate font-semibold">

                                    {
                                      otherParty?.firstName
                                    }{' '}
                                    {
                                      otherParty?.lastName
                                    }

                                  </p>

                                  {lastMessage && (

                                    <span className="shrink-0 text-xs text-gray-400">

                                      {format(
                                        lastMessage.createdAt,
                                        'HH:mm'
                                      )}

                                    </span>
                                  )}

                                </div>

                                <p className="mt-1 truncate text-sm text-gray-500">

                                  {
                                    lastMessage?.content ||
                                    'No messages yet'
                                  }

                                </p>

                              </div>

                            </div>

                          </button>
                        );
                      }
                    )}

                  </div>

                </div>

              </div>

              {/* CHAT WINDOW */}
              <div className="flex flex-1 flex-col">

                {selectedBooking ? (

                  <>

                    {/* HEADER */}
                    <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-5">

                      {/* LEFT */}
                      <div className="flex items-center gap-4">

                        <button className="lg:hidden">

                          <ChevronLeft className="h-5 w-5" />

                        </button>

                        <Avatar className="h-12 w-12 rounded-2xl">

                          <AvatarImage
                            src={
                              getOtherParty(
                                selectedBooking
                              )?.avatar
                            }
                          />

                          <AvatarFallback>

                            {
                              getOtherParty(
                                selectedBooking
                              )?.firstName?.[0]
                            }

                          </AvatarFallback>

                        </Avatar>

                        <div>

                          <p className="font-semibold">

                            {
                              getOtherParty(
                                selectedBooking
                              )?.firstName
                            }{' '}
                            {
                              getOtherParty(
                                selectedBooking
                              )?.lastName
                            }

                          </p>

                          <p className="mt-1 text-sm text-gray-500">

                            {t(
                              `services.${selectedBooking.serviceType}`
                            )}

                          </p>

                        </div>

                      </div>

                      {/* ACTIONS */}
                      <div className="flex items-center gap-2">

                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-2xl"
                        >

                          <Phone className="h-5 w-5" />

                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-2xl"
                        >

                          <Video className="h-5 w-5" />

                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-2xl"
                        >

                          <MoreVertical className="h-5 w-5" />

                        </Button>

                      </div>

                    </div>

                    {/* MESSAGES */}
                    <div className="flex-1 overflow-y-auto bg-[#fcfcfc] px-6 py-6">

                      <div className="space-y-5">

                        {chatMessages.map(
                          (message) => {

                            const isMe =
                              message.senderId ===
                              '1';

                            return (

                              <div
                                key={message.id}
                                className={`flex ${
                                  isMe
                                    ? 'justify-end'
                                    : 'justify-start'
                                }`}
                              >

                                <div
                                  className={`max-w-[75%] rounded-[24px] px-5 py-4 shadow-sm ${
                                    isMe
                                      ? 'bg-[#5B3DF5] text-white'
                                      : 'bg-white text-black'
                                  }`}
                                >

                                  <p className="leading-7">

                                    {message.content}

                                  </p>

                                  <span
                                    className={`mt-2 block text-xs ${
                                      isMe
                                        ? 'text-white/70'
                                        : 'text-gray-400'
                                    }`}
                                  >

                                    {format(
                                      message.createdAt,
                                      'HH:mm'
                                    )}

                                  </span>

                                </div>

                              </div>
                            );
                          }
                        )}

                        <div
                          ref={messagesEndRef}
                        />

                      </div>

                    </div>

                    {/* INPUT */}
                    <div className="border-t border-gray-100 bg-white p-5">

                      <div className="flex items-center gap-3">

                        <Input
                          value={newMessage}
                          onChange={(e) =>
                            setNewMessage(
                              e.target.value
                            )
                          }
                          placeholder="Type your message..."
                          onKeyDown={(e) =>
                            e.key ===
                              'Enter' &&
                            handleSend()
                          }
                          className="h-12 rounded-2xl border-gray-100 bg-[#fafafa]"
                        />

                        <Button
                          onClick={handleSend}
                          disabled={
                            !newMessage.trim()
                          }
                          className="h-12 rounded-2xl bg-[#5B3DF5] px-5 hover:bg-[#4c32d9]"
                        >

                          <Send className="h-5 w-5" />

                        </Button>

                      </div>

                    </div>

                  </>

                ) : (

                  <div className="flex flex-1 items-center justify-center bg-[#fcfcfc]">

                    <div className="text-center">

                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#5B3DF5]/10 text-[#5B3DF5]">

                        <Send className="h-8 w-8" />

                      </div>

                      <h3 className="mt-6 text-2xl font-semibold">

                        No Conversation Selected

                      </h3>

                      <p className="mt-3 text-gray-500">

                        Select a chat to start messaging

                      </p>

                    </div>

                  </div>
                )}

              </div>

            </div>

          </Card>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
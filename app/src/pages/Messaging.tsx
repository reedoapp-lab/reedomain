import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Send, Phone, Video, MoreVertical, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Navigation } from '@/components/layout/Navigation';
import { mockMessages, mockBookings, mockUsers } from '@/lib/mockData';
import { format } from 'date-fns';

export function Messaging() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get('booking');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(bookingId);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  // Get unique bookings with messages
  const chatBookings = Array.from(new Set(mockMessages.map((m) => m.bookingId))).map(
    (id) => mockBookings.find((b) => b.id === id)
  ).filter(Boolean);

  const selectedBooking = mockBookings.find((b) => b.id === selectedBookingId);
  const chatMessages = messages.filter((m) => m.bookingId === selectedBookingId);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSend = () => {
    if (!newMessage.trim() || !selectedBookingId) return;

    const message = {
      id: String(Date.now()),
      bookingId: selectedBookingId,
      senderId: '1', // Current user
      sender: mockUsers[0],
      content: newMessage,
      createdAt: new Date(),
      isRead: false,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const getOtherParty = (booking: typeof selectedBooking) => {
    if (!booking) return null;
    // In real app, determine if current user is customer or provider
    return booking.provider?.user || booking.customer;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <Card className="flex h-[calc(100vh-8rem)] overflow-hidden">
            {/* Chat List */}
            <div className="w-80 border-r bg-gray-50">
              <div className="border-b p-4">
                <h2 className="text-lg font-semibold">{t('nav.messages')}</h2>
              </div>
              <div className="overflow-y-auto">
                {chatBookings.map((booking) => {
                  const otherParty = getOtherParty(booking);
                  const lastMessage = messages
                    .filter((m) => m.bookingId === booking?.id)
                    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];

                  return (
                    <button
                      key={booking?.id}
                      onClick={() => setSelectedBookingId(booking?.id || null)}
                      className={`flex w-full items-center gap-3 border-b p-4 text-left transition-colors hover:bg-gray-100 ${
                        selectedBookingId === booking?.id ? 'bg-white' : ''
                      }`}
                    >
                      <Avatar>
                        <AvatarImage src={otherParty?.avatar} />
                        <AvatarFallback>
                          {otherParty?.firstName?.[0]}
                          {otherParty?.lastName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate font-medium">
                          {otherParty?.firstName} {otherParty?.lastName}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {lastMessage?.content || 'No messages yet'}
                        </p>
                      </div>
                      {lastMessage && (
                        <span className="text-xs text-gray-400">
                          {format(lastMessage.createdAt, 'HH:mm')}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex flex-1 flex-col">
              {selectedBooking ? (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center gap-3">
                      <button className="lg:hidden">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <Avatar>
                        <AvatarImage src={getOtherParty(selectedBooking)?.avatar} />
                        <AvatarFallback>
                          {getOtherParty(selectedBooking)?.firstName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">
                          {getOtherParty(selectedBooking)?.firstName}{' '}
                          {getOtherParty(selectedBooking)?.lastName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {t(`services.${selectedBooking.serviceType}`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {chatMessages.map((message) => {
                        const isMe = message.senderId === '1';
                        return (
                          <div
                            key={message.id}
                            className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                                isMe
                                  ? 'bg-[#4382FF] text-white'
                                  : 'bg-gray-100 text-gray-900'
                              }`}
                            >
                              <p>{message.content}</p>
                              <span
                                className={`mt-1 block text-xs ${
                                  isMe ? 'text-white/70' : 'text-gray-500'
                                }`}
                              >
                                {format(message.createdAt, 'HH:mm')}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Input */}
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      />
                      <Button
                        onClick={handleSend}
                        disabled={!newMessage.trim()}
                        className="bg-[#4382FF]"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-1 items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500">Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

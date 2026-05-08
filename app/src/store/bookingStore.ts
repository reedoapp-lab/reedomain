import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Booking, BookingStatus } from '@/types';
import { mockBookings, mockProviders } from '@/lib/mockData';

interface BookingState {
  bookings: Booking[];
  currentBooking: Booking | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  createBooking: (bookingData: Partial<Booking>) => Promise<Booking | null>;
  updateBookingStatus: (bookingId: string, status: BookingStatus) => void;
  cancelBooking: (bookingId: string) => void;
  assignProvider: (bookingId: string, providerId: string) => void;
  setCurrentBooking: (booking: Booking | null) => void;
  getCustomerBookings: (customerId: string) => Booking[];
  getProviderBookings: (providerId: string) => Booking[];
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set, get) => ({
      bookings: mockBookings,
      currentBooking: null,
      isLoading: false,
      error: null,

      createBooking: async (bookingData) => {
        set({ isLoading: true, error: null });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const newBooking: Booking = {
          id: String(get().bookings.length + 1),
          customerId: bookingData.customerId!,
          customer: bookingData.customer!,
          serviceType: bookingData.serviceType!,
          status: 'searching_provider',
          scheduledDate: bookingData.scheduledDate!,
          scheduledTime: bookingData.scheduledTime!,
          address: bookingData.address!,
          notes: bookingData.notes,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        set(state => ({
          bookings: [...state.bookings, newBooking],
          currentBooking: newBooking,
          isLoading: false,
        }));
        
        return newBooking;
      },

      updateBookingStatus: (bookingId, status) => {
        set(state => ({
          bookings: state.bookings.map(booking =>
            booking.id === bookingId
              ? { ...booking, status, updatedAt: new Date() }
              : booking
          ),
        }));
      },

      cancelBooking: (bookingId) => {
        set(state => ({
          bookings: state.bookings.map(booking =>
            booking.id === bookingId
              ? { ...booking, status: 'cancelled', updatedAt: new Date() }
              : booking
          ),
        }));
      },

      assignProvider: (bookingId, providerId) => {
        const provider = mockProviders.find(p => p.id === providerId);
        
        set(state => ({
          bookings: state.bookings.map(booking =>
            booking.id === bookingId
              ? { 
                  ...booking, 
                  providerId, 
                  provider,
                  status: 'provider_assigned',
                  updatedAt: new Date() 
                }
              : booking
          ),
        }));
      },

      setCurrentBooking: (booking) => {
        set({ currentBooking: booking });
      },

      getCustomerBookings: (customerId) => {
        return get().bookings.filter(b => b.customerId === customerId);
      },

      getProviderBookings: (providerId) => {
        return get().bookings.filter(b => b.providerId === providerId);
      },
    }),
    {
      name: 'booking-storage',
      partialize: (state) => ({ bookings: state.bookings }),
    }
  )
);

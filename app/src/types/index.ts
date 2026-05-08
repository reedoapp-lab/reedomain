// User Types
export type UserRole = 'customer' | 'provider' | 'admin';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Provider Types
export interface Provider {
  id: string;
  userId: string;
  user: User;
  bio: string;
  services: ServiceType[];
  pricing: PricingInfo[];
  location: Location;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  verificationStatus: 'pending' | 'approved' | 'rejected';
  photos: string[];
  documents: string[];
  availability: AvailabilitySlot[];
  createdAt: Date;
}

export interface Location {
  address: string;
  city: string;
  postalCode: string;
  latitude: number;
  longitude: number;
}

export interface PricingInfo {
  serviceType: ServiceType;
  basePrice: number;
  unit: 'hour' | 'job' | 'sqm';
}

export interface AvailabilitySlot {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

// Service Types
export type ServiceType = 
  | 'cleaning'
  | 'plumbing'
  | 'electrical'
  | 'it_support'
  | 'gardening'
  | 'painting'
  | 'moving'
  | 'appliance_repair'
  | 'furniture_assembly'
  | 'hvac';

export interface ServiceCategory {
  id: ServiceType;
  nameKey: string;
  icon: string;
  descriptionKey: string;
}

// Booking Types
export type BookingStatus = 
  | 'pending'
  | 'searching_provider'
  | 'provider_assigned'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export interface Booking {
  id: string;
  customerId: string;
  customer: User;
  providerId?: string;
  provider?: Provider;
  serviceType: ServiceType;
  status: BookingStatus;
  scheduledDate: Date;
  scheduledTime: string;
  address: string;
  notes?: string;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Review Types
export interface Review {
  id: string;
  bookingId: string;
  customerId: string;
  customer: User;
  providerId: string;
  provider: Provider;
  rating: number;
  comment: string;
  createdAt: Date;
}

// Message Types
export interface Message {
  id: string;
  bookingId: string;
  senderId: string;
  sender: User;
  content: string;
  createdAt: Date;
  isRead: boolean;
}

// Notification Types
export type NotificationType = 
  | 'booking_request'
  | 'booking_confirmed'
  | 'booking_cancelled'
  | 'provider_assigned'
  | 'service_completed'
  | 'new_message'
  | 'verification_approved'
  | 'verification_rejected';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  titleKey: string;
  messageKey: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: Date;
}

// Payment Types
export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  method: 'card' | 'blik' | 'transfer';
  createdAt: Date;
}

// Filter Types
export interface ServiceFilter {
  category?: ServiceType;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  maxDistance?: number;
  date?: Date;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
}

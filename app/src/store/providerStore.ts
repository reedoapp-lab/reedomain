import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Provider, ServiceType } from '@/types';
import { mockProviders } from '@/lib/mockData';

interface ProviderState {
  providers: Provider[];
  currentProvider: Provider | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  registerProvider: (providerData: Partial<Provider>) => Promise<Provider | null>;
  updateProvider: (providerId: string, data: Partial<Provider>) => void;
  verifyProvider: (providerId: string, status: 'approved' | 'rejected') => void;
  getProvidersByService: (serviceType: ServiceType) => Provider[];
  getVerifiedProviders: () => Provider[];
  setCurrentProvider: (provider: Provider | null) => void;
}

export const useProviderStore = create<ProviderState>()(
  persist(
    (set, get) => ({
      providers: mockProviders,
      currentProvider: null,
      isLoading: false,
      error: null,

      registerProvider: async (providerData) => {
        set({ isLoading: true, error: null });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const newProvider: Provider = {
          id: String(get().providers.length + 1),
          userId: providerData.userId!,
          user: providerData.user!,
          bio: providerData.bio || '',
          services: providerData.services || [],
          pricing: providerData.pricing || [],
          location: providerData.location!,
          rating: 0,
          reviewCount: 0,
          isVerified: false,
          verificationStatus: 'pending',
          photos: providerData.photos || [],
          documents: providerData.documents || [],
          availability: providerData.availability || [],
          createdAt: new Date(),
        };
        
        set(state => ({
          providers: [...state.providers, newProvider],
          currentProvider: newProvider,
          isLoading: false,
        }));
        
        return newProvider;
      },

      updateProvider: (providerId, data) => {
        set(state => ({
          providers: state.providers.map(provider =>
            provider.id === providerId
              ? { ...provider, ...data, updatedAt: new Date() }
              : provider
          ),
        }));
      },

      verifyProvider: (providerId, status) => {
        set(state => ({
          providers: state.providers.map(provider =>
            provider.id === providerId
              ? { 
                  ...provider, 
                  verificationStatus: status,
                  isVerified: status === 'approved',
                  updatedAt: new Date() 
                }
              : provider
          ),
        }));
      },

      getProvidersByService: (serviceType) => {
        return get().providers.filter(p => 
          p.services.includes(serviceType) && p.isVerified
        );
      },

      getVerifiedProviders: () => {
        return get().providers.filter(p => p.isVerified);
      },

      setCurrentProvider: (provider) => {
        set({ currentProvider: provider });
      },
    }),
    {
      name: 'provider-storage',
      partialize: (state) => ({ providers: state.providers }),
    }
  )
);

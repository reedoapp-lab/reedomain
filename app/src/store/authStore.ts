import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type {
  User,
  LoginCredentials,
  SignupData,
} from '@/types';

import { supabase } from '@/lib/supabase';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  googleSignIn: () => Promise<void>,
  isLoading: boolean;
  error: string | null;

  // ACTIONS
  login: (
    credentials: LoginCredentials
  ) => Promise<boolean>;

  signup: (
    data: SignupData
  ) => Promise<boolean>;

  logout: () => Promise<void>;

  updateUser: (
    user: Partial<User>
  ) => void;

  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // LOGIN
      login: async (credentials) => {
        set({
          isLoading: true,
          error: null,
        });

        const { data, error } =
          await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          });

        if (error || !data.user) {
          set({
            isLoading: false,
            error:
              error?.message ||
              'Login failed',
          });

          return false;
        }

        const user: User = {
          id: data.user.id,
          email: data.user.email || '',
          firstName: '',
          lastName: '',
          role: 'customer',
          phone: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        set({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });

        return true;
      },
    
googleSignIn: async () => {

  const { error } =
    await supabase.auth.signInWithOAuth({

      provider: 'google',

      options: {
        redirectTo:
          window.location.origin +
          '/auth/callback',
      },
    });

  if (error) {
    console.error(error.message);
  }

},
      // SIGNUP
      signup: async (data) => {
        set({
          isLoading: true,
          error: null,
        });

        const {
          data: authData,
          error,
        } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });

        if (error || !authData.user) {
          set({
            isLoading: false,
            error:
              error?.message ||
              'Signup failed',
          });

          return false;
        }

        // SAVE PROFILE
        await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            full_name: `${data.firstName} ${data.lastName}`,
            phone: data.phone,
            address: '',
            role: 'customer',
            complaint_history: [],
          });

        const newUser: User = {
          id: authData.user.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: 'customer',
          phone: data.phone,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        set({
          user: newUser,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });

        return true;
      },

      // LOGOUT
logout: async () => {

  // SIGN OUT FROM SUPABASE
  const { error } =
    await supabase.auth.signOut();

  if (error) {

    console.error(error.message);
    return;

  }

  // CLEAR LOCAL STATE
  set({
    user: null,
  });

  // FORCE REDIRECT
  window.location.href = '/login';

},

      // UPDATE USER
      updateUser: (userData) => {
        const { user } = get();

        if (user) {
          set({
            user: {
              ...user,
              ...userData,
              updatedAt: new Date(),
            },
          });
        }
      },

      // CLEAR ERROR
      clearError: () => {
        set({
          error: null,
        });
      },
    }),
    {
      name: 'auth-storage',

      partialize: (state) => ({
        user: state.user,
        isAuthenticated:
          state.isAuthenticated,
      }),
    }
  )
);

supabase.auth.onAuthStateChange(
  async (event, session) => {

    if (
      event === 'SIGNED_IN' &&
      session?.user
    ) {

      const user = session.user;

      await supabase
        .from('profiles')
        .upsert({
          id: user.id,

          email: user.email,

          full_name:
            user.user_metadata
              ?.full_name || '',

          avatar_url:
            user.user_metadata
              ?.avatar_url || '',

          phone: '',

          role: 'customer',
        });

    }
  }
);
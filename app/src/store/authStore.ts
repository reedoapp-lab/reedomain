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
  isLoading: boolean;
  error: string | null;

  // ACTIONS
  login: (
    credentials: LoginCredentials
  ) => Promise<boolean>;

  signup: (
    data: SignupData
  ) => Promise<boolean>;

  googleSignIn: () => Promise<void>;

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

        const {
          data,
          error,
        } = await supabase.auth.signInWithPassword({
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
          firstName:
            data.user.user_metadata?.first_name || '',
          lastName:
            data.user.user_metadata?.last_name || '',
          role: 'customer',
          phone:
            data.user.user_metadata?.phone || '',
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

      // GOOGLE SIGN IN
      googleSignIn: async () => {

        const { error } =
          await supabase.auth.signInWithOAuth({

            provider: 'google',

            options: {

              queryParams: {
                prompt: 'select_account',
              },

              redirectTo:
                window.location.origin +
                '/dashboard',

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

          options: {

            data: {

              first_name:
                data.firstName,

              last_name:
                data.lastName,

              phone:
                data.phone,

            },

          },

        });

        if (
          error ||
          !authData.user
        ) {

          set({
            isLoading: false,
            error:
              error?.message ||
              'Signup failed',
          });

          return false;
        }

        // CREATE PROFILE
        await supabase
          .from('profiles')
          .upsert({

            id:
              authData.user.id,

            email:
              data.email,

            full_name:
              `${data.firstName} ${data.lastName}`,

            phone:
              data.phone,

            address: '',

            role: 'customer',

            complaint_history: [],

          });

        const newUser: User = {

          id:
            authData.user.id,

          email:
            data.email,

          firstName:
            data.firstName,

          lastName:
            data.lastName,

          role: 'customer',

          phone:
            data.phone,

          createdAt:
            new Date(),

          updatedAt:
            new Date(),

        };

        set({

          user:
            newUser,

          isAuthenticated: true,

          isLoading: false,

          error: null,

        });

        return true;
      },

      // LOGOUT
      logout: async () => {

        await supabase.auth.signOut();

        localStorage.clear();

        sessionStorage.clear();

        set({
          user: null,
          isAuthenticated: false,
        });

        window.location.href =
          '/login';

      },

      // UPDATE USER
      updateUser: (
        userData
      ) => {

        const {
          user,
        } = get();

        if (user) {

          set({

            user: {

              ...user,

              ...userData,

              updatedAt:
                new Date(),

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

        user:
          state.user,

        isAuthenticated:
          state.isAuthenticated,

      }),

    }

  )

);

// AUTH STATE LISTENER
supabase.auth.onAuthStateChange(
  async (
    event,
    session
  ) => {

    if (
      event === 'SIGNED_IN' &&
      session?.user
    ) {

      const user =
        session.user;

      await supabase
        .from('profiles')
        .upsert({

          id:
            user.id,

          email:
            user.email,

          full_name:
            user.user_metadata
              ?.full_name ||

            `${user.user_metadata?.first_name || ''}
             ${user.user_metadata?.last_name || ''}`,

          avatar_url:
            user.user_metadata
              ?.avatar_url || '',

          phone:
            user.user_metadata
              ?.phone || '',

          role:
            'customer',

        });

    }

  }

);
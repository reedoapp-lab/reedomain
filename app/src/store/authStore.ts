import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { supabase } from '@/lib/supabase';

interface AuthState {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (data: {
    email: string;
    password: string;
  }) => Promise<boolean>;

  signup: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }) => Promise<boolean>;

  googleSignIn: () => Promise<void>;

  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({

      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // LOGIN
      login: async ({
        email,
        password,
      }) => {

        set({
          isLoading: true,
          error: null,
        });

        const {
          data,
          error,
        } = await supabase.auth.signInWithPassword({

          email,
          password,

        });

        if (error) {

          set({
            isLoading: false,
            error: error.message,
          });

          return false;
        }

        set({

          user: data.user,

          isAuthenticated: true,

          isLoading: false,

          error: null,

        });

        return true;

      },

      // SIGNUP
      signup: async ({
        firstName,
        lastName,
        email,
        phone,
        password,
      }) => {

        set({
          isLoading: true,
          error: null,
        });

        const {
          data,
          error,
        } = await supabase.auth.signUp({

          email,
          password,

          options: {

            data: {

              first_name: firstName,
              last_name: lastName,
              phone,

            },

          },

        });

        if (error || !data.user) {

          set({
            isLoading: false,
            error:
              error?.message ||
              'Signup failed',
          });

          return false;
        }

        // CREATE PROFILE
        const { error: profileError } =
          await supabase
            .from('profiles')
            .insert({

              id: data.user.id,

              email,

              full_name:
                `${firstName} ${lastName}`,

              phone,

              role: 'customer',

              address: '',

              avatar_url: '',

              complaint_history: [],

            });

        if (profileError) {

          console.error(
            profileError.message
          );

        }

        set({

          user: data.user,

          isAuthenticated: true,

          isLoading: false,

          error: null,

        });

        return true;

      },

      // GOOGLE LOGIN
      googleSignIn: async () => {

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

    }),

    {
      name: 'auth-storage',
    }

  )

);
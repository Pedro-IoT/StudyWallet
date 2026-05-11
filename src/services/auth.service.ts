import axios from 'axios';
import { LoginFormValues, RegisterFormValues } from '@/schemas/auth.schema';

const API_URL = 'https://your-supabase-project.supabase.co/auth/v1';

// We create an axios instance for the auth service
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Provide your Supabase anon key here when available
    // 'apikey': 'YOUR_SUPABASE_ANON_KEY',
  },
});

export const authService = {
  login: async (data: LoginFormValues) => {
    // Typical Supabase login endpoint
    const response = await apiClient.post('/token?grant_type=password', {
      email: data.email,
      password: data.password,
    });

    return {
      user: response.data.user,
      token: response.data.access_token,
    };
  },

  register: async (data: RegisterFormValues) => {
    // Typical Supabase signup endpoint
    const response = await apiClient.post('/signup', {
      email: data.email,
      password: data.password,
      options: {
        data: {
          name: data.name,
        },
      },
    });

    // Supabase might return session if email confirmations are turned off
    const token =
      response.data.session?.access_token ||
      response.data.access_token ||
      'pending-confirmation';

    return {
      user: response.data.user,
      token,
    };
  },
};

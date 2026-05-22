import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { supabase } from '@/lib/supabase';

export default function AuthCallback() {

  const navigate = useNavigate();

  useEffect(() => {

    const handleAuth = async () => {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate('/login');
        return;
      }

      // CREATE PROFILE
      await supabase
  .from('profiles')
  .upsert({
    id: user.id,

    email: user.email,

    full_name:
      user.user_metadata?.full_name || '',

    avatar_url:
      user.user_metadata?.avatar_url || '',

    role: 'customer',
  });

      window.location.href = '/dashboard';

    };

    handleAuth();

  }, []);

  return (

    <div className="flex min-h-screen items-center justify-center bg-white text-black">

      Loading...

    </div>
  );
}
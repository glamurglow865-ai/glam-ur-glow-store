// src/components/AdminShell.tsx
'use client';
import { ReactNode, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AdminShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // verify user is logged in and is admin
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/gg-admin-987');
        return;
      }
      // check admins table
      const { data: admins, error } = await supabase
        .from('admins')
        .select('*')
        .eq('user_id', user.id)
        .limit(1);

      if (!admins || admins.length === 0) {
        // not an admin
        router.push('/gg-admin-987');
        return;
      }
      setChecking(false);
    })();
  }, [router]);

  if (checking) {
    return <div className="p-8">Checking admin access…</div>;
  }

  return (
    <div className="min-h-screen bg-glamPink p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow">
        {children}
      </div>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('glamurglow865@gmail.com');
  const [password, setPassword] = useState('#Happy2008');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  async function signIn(e: any) {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setMsg(error.message);
      return;
    }
    // on successful login, redirect to dashboard
    router.push('/gg-admin-987/dashboard');
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Admin login — Glam Ur Glow</h2>
      <form onSubmit={signIn} className="space-y-3">
        <input className="w-full border p-3 rounded" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input className="w-full border p-3 rounded" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <button className="w-full py-3 rounded bg-glamGold text-white font-semibold" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
        <p className="text-sm text-red-600">{msg}</p>
      </form>
      <p className="text-xs text-gray-500 mt-4">After login, you will access the admin dashboard to add products and view orders.</p>
    </div>
  );
}

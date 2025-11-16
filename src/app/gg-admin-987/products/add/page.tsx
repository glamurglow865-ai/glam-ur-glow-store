'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

export default function AddProduct() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [fakePrice, setFakePrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function uploadAndSave(e: any) {
    e.preventDefault();
    if (!file) return alert('Please choose an image');
    setLoading(true);
    try {
      const fileName = `${uuidv4()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(fileName, file, { upsert: false });
      if (uploadError) throw uploadError;
      const publicUrl = supabase.storage.from('product-images').getPublicUrl(fileName).data.publicUrl;
      // insert product
      const { error } = await supabase.from('products').insert({
        name,
        description,
        price: Number(price),
        fake_price: fakePrice ? Number(fakePrice) : null,
        image_url: publicUrl
      });
      if (error) throw error;
      router.push('/gg-admin-987/dashboard');
    } catch (err: any) {
      alert(err.message || JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={uploadAndSave} className="space-y-3">
        <input className="w-full border p-3 rounded" placeholder="Product name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full border p-3 rounded" placeholder="Price (₹)" value={price} onChange={e=>setPrice(e.target.value)} />
        <input className="w-full border p-3 rounded" placeholder="Fake / MRP (optional)" value={fakePrice} onChange={e=>setFakePrice(e.target.value)} />
        <textarea className="w-full border p-3 rounded" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
        <input type="file" accept="image/*" onChange={e=>setFile(e.target.files ? e.target.files[0] : null)} />
        <button className="w-full py-3 bg-glamGold text-white rounded" disabled={loading}>{loading ? 'Uploading…' : 'Add product'}</button>
      </form>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      setProducts(data || []);
    })();
  }, []);

  async function del(id: string) {
    if (!confirm('Delete this product?')) return;
    await supabase.from('products').delete().eq('id', id);
    setProducts((p) => p.filter(x => x.id !== id));
  }

  return (
    <div className="grid grid-cols-1 gap-3">
      {products.map(p => (
        <div key={p.id} className="p-3 border rounded flex items-center gap-4">
          <img src={p.image_url} className="w-16 h-16 object-cover rounded" alt={p.name}/>
          <div className="flex-1">
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-gray-500">₹{p.price}</div>
          </div>
          <div className="flex gap-2">
            <a href={`/gg-admin-987/products/edit/${p.id}`} className="text-sm px-3 py-1 border rounded">Edit</a>
            <button onClick={()=>del(p.id)} className="text-sm px-3 py-1 bg-red-50 border rounded text-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

'use client';


import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export default function ProductsPage() {
const [products, setProducts] = useState<any[]>([]);


useEffect(() => {
const load = async () => {
const { data } = await supabase.from('products').select('*');
setProducts(data || []);
};
load();
}, []);


return (
<div>
<h2 className="text-3xl font-bold mb-6">All Products</h2>


{products.length === 0 ? (
<p className="text-gray-500">No products yet.</p>
) : (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
{products.map((p) => (
<ProductCard
key={p.id}
id={p.id}
name={p.name}
price={p.price}
fakePrice={p.fake_price}
image={p.image_url}
/>
))}
</div>
)}
</div>
);
  }

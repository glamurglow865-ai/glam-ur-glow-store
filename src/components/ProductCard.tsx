'use client';

import Image from 'next/image';

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded-lg p-3 shadow-sm">
      <Image
        src={product.image_url}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-md"
      />

      <h3 className="font-semibold mt-2">{product.name}</h3>

      <div className="flex gap-2 items-center">
        <span className="text-lg font-bold text-pink-600">₹{product.price}</span>
        {product.fake_price && (
          <span className="line-through text-gray-400">₹{product.fake_price}</span>
        )}
      </div>
    </div>
  );
}

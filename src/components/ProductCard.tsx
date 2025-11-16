"use client";

import Image from "next/image";

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <Image
        src={product.image_url}
        width={300}
        height={300}
        alt={product.title}
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">₹{product.price}</p>
    </div>
  );
}

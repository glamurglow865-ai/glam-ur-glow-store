"use client";

export default function AdminProductList({ products }: any) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-3 gap-4">
        {products.map((p: any) => (
          <div key={p.id} className="border p-4 rounded-lg bg-white">
            <img src={p.image_url} className="rounded" />
            <h3 className="font-semibold mt-2">{p.title}</h3>
            <p className="text-gray-600">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

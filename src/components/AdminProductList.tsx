'use client';

export default function AdminProductList({ products }: any) {
  return (
    <div className="grid gap-4">
      {products.map((p: any) => (
        <div key={p.id} className="border p-3 rounded-lg">
          <h3 className="font-semibold">{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}

}

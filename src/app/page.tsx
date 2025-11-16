export default function HomePage() {
return (
<div className="space-y-12">
{/* Hero Section */}
<section className="bg-glamPink rounded-3xl py-16 px-6 text-center shadow-md">
<h2 className="text-4xl font-bold text-glamGold mb-4">Elegance for Everyday</h2>
<p className="text-gray-700 max-w-xl mx-auto text-lg">
Discover premium daily-wear jewellery crafted to make you glow.
</p>
<a
href="/products"
className="inline-block mt-6 bg-glamGold text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-90"
>
Shop Now
</a>
</section>


{/* Products Grid Placeholder */}
<section>
<h3 className="text-2xl font-semibold mb-4">Featured Products</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
{/* Placeholder Cards */}
{[1,2,3,4].map((i) => (
<div key={i} className="border rounded-xl p-4 shadow-sm bg-white">
<div className="w-full h-32 bg-gray-200 rounded-lg mb-3" />
<h4 className="font-semibold text-gray-800">Product Name</h4>
<p className="text-gray-500 text-sm">₹999</p>
</div>
))}
</div>
</section>
</div>
);
}

interface ProductCardProps {
id: string;
name: string;
price: number;
fakePrice?: number;
image: string;
}


export default function ProductCard({ id, name, price, fakePrice, image }: ProductCardProps) {
return (
<a
href={`/product/${id}`}
className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition block"
>
<img
src={image}
alt={name}
className="w-full h-40 object-cover rounded-lg mb-3 bg-gray-100"
/>


<h4 className="font-semibold text-gray-800 truncate">{name}</h4>


<div className="mt-1 flex gap-2 items-center">
<p className="text-lg font-bold text-gray-900">₹{price}</p>
{fakePrice && (
<p className="text-sm text-gray-500 line-through">₹{fakePrice}</p>
)}
</div>
</a>
);
}

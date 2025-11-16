import './globals.css';


export const metadata = {
title: 'Glam Ur Glow',
description: 'Daily luxury jewellery & accessories',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-white text-gray-900">
<header className="w-full border-b border-gray-200 py-4 bg-white/70 backdrop-blur-lg sticky top-0 z-50">
<nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
<h1 className="text-2xl font-bold text-glamGold tracking-wide">Glam Ur Glow</h1>
<div className="flex gap-6 text-gray-700 font-medium">
<a href="/" className="hover:text-glamGold">Home</a>
<a href="/products" className="hover:text-glamGold">Products</a>
<a href="/cart" className="hover:text-glamGold">Cart</a>
</div>
</nav>
</header>


<main className="max-w-6xl mx-auto px-4 py-6">{children}</main>


<footer className="mt-10 py-6 bg-glamPink text-center text-gray-700 text-sm">
© {new Date().getFullYear()} Glam Ur Glow — All Rights Reserved.
</footer>
</body>
</html>
);
}

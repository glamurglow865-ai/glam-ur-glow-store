export default function AdminShell({ children }: any) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white p-4 min-h-screen">
        <h2 className="text-xl font-bold">Admin Panel</h2>

        <ul className="mt-4 space-y-2">
          <li><a href="/gg-admin-987/dashboard">Dashboard</a></li>
          <li><a href="/gg-admin-987/products/add">Add Product</a></li>
        </ul>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}

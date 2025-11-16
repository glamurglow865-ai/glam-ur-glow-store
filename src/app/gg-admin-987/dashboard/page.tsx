import AdminShell from '@/components/AdminShell';
import ProductList from '@/components/AdminProductList';

export default function AdminDashboard() {
  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded">Total orders: —</div>
          <div className="p-4 border rounded">Total revenue: —</div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium">Products</h2>
            <a href="/gg-admin-987/products/add" className="text-sm bg-glamGold text-white px-3 py-2 rounded">Add product</a>
          </div>
          <ProductList />
        </div>
      </section>
    </AdminShell>
  );
}

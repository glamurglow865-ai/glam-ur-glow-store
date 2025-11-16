export default function AdminShell({ children }: any) {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Admin Panel</h1>
      {children}
    </div>
  );
}
  }

  return (
    <div className="min-h-screen bg-glamPink p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow">
        {children}
      </div>
    </div>
  );
}

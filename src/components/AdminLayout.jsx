import React from 'react';
import Link from 'next/link';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sky-700 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li>
              <Link href="/admin/dashboard" className="block py-2 px-4 hover:bg-sky-800">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="block py-2 px-4 hover:bg-sky-800">
                User Management
              </Link>
            </li>
            <li>
              <Link href="/admin/content" className="block py-2 px-4 hover:bg-sky-800">
                Content Management
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" className="block py-2 px-4 hover:bg-sky-800">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
};

export default AdminLayout;

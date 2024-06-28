import React from 'react';
import Link from 'next/link';

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sky-700 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li>
              <Link href="/user/dashboard">
                <a className="block py-2 px-4 hover:bg-sky-800">Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/user/content">
                <a className="block py-2 px-4 hover:bg-sky-800">Content Management</a>
              </Link>
            </li>
            <li>
              <Link href="/user/profile">
                <a className="block py-2 px-4 hover:bg-sky-800">Profile</a>
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

export default UserLayout;

import React from 'react';
import Link from 'next/link';


const BlogNavbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold text-sky-600">NextGenInfo</h1>
        <nav className="flex space-x-3">
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </Link>
          <Link href="/blogs" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Blogs</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </Link>
          <Link href="/write" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Write</a>
          </Link>
          <Link href="/signin" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-800">Sign In</a>
          </Link>
        </nav>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
            <svg
              className="w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8l4 4m0-4l-4 4m12 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          {/* Centered Get Started Button */}
          <button className="bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition duration-300 shadow-lg shadow-sky-500/50" href="/blogs/login" legacyBehavior>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default BlogNavbar;

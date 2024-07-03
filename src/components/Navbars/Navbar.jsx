// components/Navbar.js

import React from 'react';


const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sky-600">CMS</h1>
        <nav className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="/blogs/blog" className="text-gray-600 hover:text-gray-800">
              Blogs
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="/contactus" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
            <a href="/signup" className="text-gray-600 hover:text-gray-800">
              Signup
            </a>
            <a href="/login" className="text-gray-600 hover:text-gray-800">
              Login
            </a>
          </nav>
      </div>
    </header>
  );
};

export default Navbar;

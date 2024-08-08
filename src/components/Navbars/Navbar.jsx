import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sky-600">CMS</h1>
        <nav className="hidden md:flex md:space-x-4"> {/* Hide nav on small screens */}
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="/blogs" className="text-gray-600 hover:text-gray-800">
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
        {/* Hamburger menu for mobile screens */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

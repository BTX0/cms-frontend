import React from 'react';
import Link from 'next/link';

const BlogNavbar = () => {
  return (
    <nav className="bg-sky-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <a className="text-xl font-bold">MyBlog</a>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/"><a className="hover:text-gray-200">Home</a></Link></li>
          <li><Link href="/blogs"><a className="hover:text-gray-200">Blogs</a></Link></li>
          <li><Link href="/write"><a className="hover:text-gray-200">Write</a></Link></li>
          <li><Link href="/about"><a className="hover:text-gray-200">About</a></Link></li>
          <li><Link href="/signin"><a className="hover:text-gray-200">Sign In</a></Link></li>
        </ul>
        <Link href="/get-started">
          <a className="bg-white text-sky-600 px-4 py-2 rounded hover:bg-gray-200">Get Started</a>
        </Link>
      </div>
    </nav>
  );
};

export default BlogNavbar;

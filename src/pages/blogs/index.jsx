import React from 'react';
import Link from 'next/link';
import '../../app/globals.css';
import BlogNavbar from '@/components/Navbars/Navbarforblogs';
import { motion } from 'framer-motion';
import blogImage from '../../../public/demo.png'
import Image from 'next/image';
import Footerforblog from '@/components/Footers/Footerforblog';

const Blogs = () => {
  return (
    <>
     <BlogNavbar/>
       <div className="bg-sky-100 min-h-screen">
        {/* Intro Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-sky-600 text-white py-20 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to MyBlog</h1>
          <p className="text-xl">Discover, Read, and Share Blogs on Various Topics</p>
        </motion.div>

        {/* Trending Topics Slider */}
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="container mx-auto py-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">Trending Topics</h2>
          <div className="overflow-x-auto flex space-x-4">
            {/* Sample Trending Topics */}
            {Array(5).fill().map((_, index) => (
              <div key={index} className="min-w-[300px] p-4 bg-white rounded-lg shadow-md">
                <Image src={""} alt="Trending Topic" className="w-full h-40 object-cover rounded" />

                <h3 className="text-lg font-bold mt-4">Trending Topic {index + 1}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Latest News Section */}
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="container mx-auto py-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample Latest News */}
            {Array(3).fill().map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <Image src={blogImage} alt="Latest News" className="w-full h-48 object-cover rounded" />
                <h3 className="text-xl font-bold mb-2">Latest News {index + 1}</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link href="#" legacyBehavior>
                  <a className="text-sky-500 hover:underline">Read More</a>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Blog Categories */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto py-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">Blog Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sample Categories */}
            {['Tech', 'Design', 'Travel', 'Lifestyle'].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <h3 className="text-xl font-bold mb-4 text-sky-600">{category}</h3>
                <p className="text-gray-700">Explore articles and insights on {category}.</p>
              </div>
            ))}
          </div>
        </motion.div>
          <Footerforblog/>
        </div>
      </>
  );
};

export default Blogs;

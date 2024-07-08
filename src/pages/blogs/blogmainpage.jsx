import React, { useState, useEffect } from 'react';
import BlogNavbar from '@/components/Navbars/Navbarforblogs';
import Footerforblog from '@/components/Footers/Footerforblog';
import '../../app/globals.css';
const categories = ["Technology", "Health", "Business", "Lifestyle", "Entertainment"];

// Mock data for blogs
const mockBlogs = [
  {
    id: 1,
    title: "The Future of AI in Technology",
    category: "Technology",
    description: "Explore how AI is transforming the technology landscape.",
    imageUrl: "https://source.unsplash.com/random/tech",
  },
  {
    id: 2,
    title: "Healthy Eating Habits for a Better Life",
    category: "Health",
    description: "Discover tips on maintaining a healthy diet.",
    imageUrl: "https://source.unsplash.com/random/health",
  },
  {
    id: 3,
    title: "How to Start Your Own Business",
    category: "Business",
    description: "Step-by-step guide to launching your own startup.",
    imageUrl: "https://source.unsplash.com/random/business",
  },
  {
    id: 4,
    title: "10 Tips for a Balanced Lifestyle",
    category: "Lifestyle",
    description: "Learn how to balance work and life effectively.",
    imageUrl: "https://source.unsplash.com/random/lifestyle",
  },
  {
    id: 5,
    title: "Latest Trends in Entertainment",
    category: "Entertainment",
    description: "Catch up on the latest trends in the entertainment industry.",
    imageUrl: "https://source.unsplash.com/random/entertainment",
  },
];

const BlogMainPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch blogs
    setTimeout(() => {
      setBlogs(mockBlogs);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-sky-50">
      <BlogNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sky-600 text-center mb-8">Explore Our Blogs</h1>

        {/* Blog Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">Categories</h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4">
            {categories.map((category) => (
              <button
                key={category}
                className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 ease-in-out duration-300 ..."
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-sky-600">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <a href={`/blogs/${blog.id}`} className="text-sky-500 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footerforblog />
    </div>
  );
};

export default BlogMainPage;

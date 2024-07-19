import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../../app/globals.css';
import Footerforblog from '@/components/Footers/Footerforblog';
import BlogNavbar from '@/components/Navbars/Navbarforblogs';

// Mock data for blogs
const mockBlogs = [
  {
    id: 1,
    title: "The Future of AI in Technology",
    category: "technology",
    description: "Explore how AI is transforming the technology landscape.",
    imageUrl: "https://source.unsplash.com/random/tech",
  },
  {
    id: 2,
    title: "Healthy Eating Habits for a Better Life",
    category: "health",
    description: "Discover tips on maintaining a healthy diet.",
    imageUrl: "https://source.unsplash.com/random/health",
  },
  // Add more blogs as needed
];

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category) {
    return <div>Loading...</div>;
  }

  const blogs = mockBlogs.filter(blog => blog.category === category);

  return (
    <div className="min-h-screen bg-sky-50">
      <BlogNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sky-600 text-center mb-8">
          Blogs in {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-sky-600">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <Link href={`/blogs/${blog.title.toLowerCase().replace(/ /g, "-")}`} className="text-sky-500 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footerforblog />
    </div>
  );
};

export default CategoryPage;

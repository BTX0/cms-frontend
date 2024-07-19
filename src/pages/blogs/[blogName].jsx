import React from 'react';
import { useRouter } from 'next/router';
import '../../app/globals.css';

import BlogNavbar from '@/components/Navbars/Navbarforblogs';
import Footerforblog from '@/components/Footers/Footerforblog';

// Mock data for a single blog
const mockBlog = {
  title: "The Future of AI in Technology",
  content: `
    <p>AI is rapidly transforming the technology landscape. With advancements in machine learning, data processing, and computational power, AI applications are becoming more prevalent and sophisticated.</p>
    <p>From self-driving cars to smart assistants, AI is enabling new capabilities that were once thought impossible.</p>
    <p>This article explores the current state of AI technology and its potential future impact.</p>
  `,
  imageUrl: "https://source.unsplash.com/random/tech",
};

const BlogPage = () => {
  const router = useRouter();
  const { blogName } = router.query;

  // Here you would fetch the blog data using the blogName
  const blog = mockBlog; // Replace this with the actual fetched data

  return (
    <div className="min-h-screen bg-sky-50">
      <BlogNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sky-600 text-center mb-8">{blog.title}</h1>
        <img src={blog.imageUrl} alt={blog.title} className="w-full h-96 object-cover mb-8" />
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </main>
      <Footerforblog />
    </div>
  );
};

export default BlogPage;

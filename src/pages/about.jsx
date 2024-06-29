// pages/about.js

import Head from 'next/head';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import '../app/globals.css';
import Image from 'next/image'; // Use Next.js Image component for optimized images
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us - CMS</title>
        <meta name="description" content="Learn more about our CMS" />
      </Head>

      <Navbar /> {/* Include the Navbar component */}

      <main className="container mx-auto px-4 py-10">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-sky-700">About Us</h2>
          <p className="text-gray-700 mb-8">
            Discover who we are and what we do. Our CMS is designed to empower users to create and manage websites effortlessly.
          </p>
          <div className="flex justify-center">
            <Image
              src="/about-us.png" // Replace with your illustration's path

              alt="About Us"
              width={500}
              height={300}
              className="rounded shadow-md"
            />
          </div>
        </section>

        <section className="mt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2 text-sky-600">Our Mission</h3>
              <p className="text-gray-600">
                We aim to provide a powerful, yet easy-to-use content management system that allows users of all skill levels to create and manage their online presence.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2 text-sky-600">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading CMS provider, known for innovation, customer satisfaction, and the ability to make complex web development accessible to everyone.
              </p>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="mb-16">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-500 rounded-lg shadow-md p-6 hover:bg-sky-600 transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-white">What you can do?</h3>
              <p className="text-white">
                Empower yourself to create and manage stunning websites without
                needing to be a coding whiz. Our user-friendly CMS platform
                provides everything you need to get your project off the ground
                and thriving online. Craft engaging content, manage user
                permissions, and keep your website fresh – all from a single,
                intuitive interface.
              </p>
            </div>
            <div className="bg-sky-500 rounded-lg shadow-md p-6 hover:bg-sky-600 transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-white">What you will get?</h3>
              <p className="text-white">
                Whether you're a seasoned professional or a complete beginner, our
                platform caters to all skill levels. Drag-and-drop functionality
                makes creating beautiful pages a breeze, while a vast library of
                customizable templates ensures your website reflects your unique
                brand identity. Dive into the world of content creation with
                confidence and showcase your vision to the world.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default AboutPage;

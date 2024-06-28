// pages/about.js

import Head from 'next/head';
import Navbar from '../components/NavBar'; // Adjust the path as needed
import '../app/globals.css';
import Image from 'next/image'; // Use Next.js Image component for optimized images

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
              src="/about-illustration.svg" // Replace with your illustration's path
              alt="About Us"
              width={500}
              height={300}
              className="rounded shadow-md"
            />
          </div>
        </section>

        <section className="mt-10">
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
      </main>

      <footer className="bg-sky-500 text-white py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <p className="text-xs">© 2024 - Your Company Name</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-sky-100">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-100">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-100">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

// pages/contact.js

import Head from 'next/head';
import Navbar from '../components/Navbars/Navbar'; // Adjust the path as needed
import '../app/globals.css';
import Image from 'next/image'; // Use Next.js Image component for optimized images
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contact Us - CMS</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <Navbar /> {/* Include the Navbar component */}

      <main className="container mx-auto px-4 py-10">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-sky-700">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            We'd love to hear from you! Whether you have a question, feedback, or need assistance, please reach out.
          </p>
          <div className="flex justify-center">
            <Image
              src="/contact-illustration.svg" // Replace with your illustration's path
              alt="Contact Us"
              width={500}
              height={300}
              className="rounded shadow-md"
            />
          </div>
        </section>

        <section className="mt-10">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default ContactPage;

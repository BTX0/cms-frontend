// pages/index.js

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Head>
        <title>CMS Platform</title>
        <meta name="description" content="A professional CMS homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">

        <Navbar />

      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-10">
        {/* Hero Section */}
        <section id="home" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-sky-700">Welcome to our CMS Platform</h2>
          <p className="text-gray-700 mb-6">
            Effortlessly create, manage, and scale your content with our user-friendly CMS.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </section>



        {/* Features Section */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-sky-600 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Easy Content Management</h4>
              <p className="text-gray-700">Our intuitive interface makes managing your content a breeze.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Customizable Templates</h4>
              <p className="text-gray-700">Choose from a variety of templates to suit your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-gray-800">SEO Friendly</h4>
              <p className="text-gray-700">Optimize your content easily with built-in SEO tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Secure and Reliable</h4>
              <p className="text-gray-700">We prioritize security to keep your data safe.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Multi-User Support</h4>
              <p className="text-gray-700">Collaborate with your team efficiently.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-bold mb-2 text-gray-800">24/7 Customer Support</h4>
              <p className="text-gray-700">Our support team is here to help you anytime.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-sky-600 text-center">Pricing</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
            <div className="bg-white p-20 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">Basic Plan</h4>
              <p className="text-gray-700 mb-4 text-center">$19/month</p>
              <ul className="text-gray-700 mb-6">
                <li>- Access to basic features</li>
                <li>- 10GB Storage</li>
                <li>- Email Support</li>
              </ul>
              <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300">Choose Plan</button>
            </div>
            <div className="bg-white p-20 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">Pro Plan</h4>
              <p className="text-gray-700 mb-4 text-center">$49/month</p>
              <ul className="text-gray-700 mb-6">
                <li>- Access to all features</li>
                <li>- 50GB Storage</li>
                <li>- Priority Support</li>
              </ul>
              <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300">Choose Plan</button>
            </div>
            <div className="bg-white p-20 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">Enterprise Plan</h4>
              <p className="text-gray-700 mb-4 text-center">$99/month</p>
              <ul className="text-gray-700 mb-6">
                <li>- Unlimited features</li>
                <li>- Unlimited Storage</li>
                <li>- Dedicated Support</li>
              </ul>
              <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300">Choose Plan</button>
            </div>
          </div>
        </section>

      </main>

      <Footer/>
    </div>
  );
}

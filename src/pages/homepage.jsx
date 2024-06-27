// pages/index.js

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
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-sky-600">CMS Platform</h1>
          <nav className="flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
            <a href="/signup" className="text-gray-600 hover:text-gray-800">
              Signup
            </a>
            <a href="/login" className="text-gray-600 hover:text-gray-800">
              Login
            </a>
          </nav>
        </div>
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
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">Basic Plan</h4>
              <p className="text-gray-700 mb-4 text-center">$19/month</p>
              <ul className="text-gray-700 mb-6">
                <li>- Access to basic features</li>
                <li>- 10GB Storage</li>
                <li>- Email Support</li>
              </ul>
              <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300">Choose Plan</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4 text-gray-800 text-center">Pro Plan</h4>
              <p className="text-gray-700 mb-4 text-center">$49/month</p>
              <ul className="text-gray-700 mb-6">
                <li>- Access to all features</li>
                <li>- 50GB Storage</li>
                <li>- Priority Support</li>
              </ul>
              <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300">Choose Plan</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-xs">
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
        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-sky-600 text-center">About Us</h2>
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

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-sky-600 text-center">Contact Us</h2>
          <form className="bg-white shadow-md rounded-lg px-8 py-6 mx-auto my-20 max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-500 text-white py-4">
        <div className="container mx-auto px-6 flex flex-wrap justify-between">
          <p className="text-xs">© 2024 - CMS Platform</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-sky-100">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-100">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-100">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

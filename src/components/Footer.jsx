import React from 'react';

export default function Footer() {
    return(<>
    {/* Footer */}
    <footer className="bg-sky-500 text-white py-4">
        <div className="container mx-auto px-6 flex flex-wrap justify-between">
          <p className="text-xs">© 2024 - CMS Platform</p>
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="hover:text-sky-100">
                About Us
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:text-sky-100">
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
    </>)
}
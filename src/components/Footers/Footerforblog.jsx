import React, { Component } from 'react'
import Link from 'next/link';

export class Footerforblog extends Component {
  render() {
    return (
      <div>
        <footer className="bg-sky-600 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 MyBlog. All rights reserved.</p>
            <p>
              <Link href="/about" legacyBehavior><a className="hover:underline">About</a></Link> | 
              <Link href="/contact" legacyBehavior><a className="hover:underline"> Contact</a></Link>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footerforblog

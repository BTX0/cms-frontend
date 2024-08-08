import React, { useState } from 'react';
import '../../app/globals.css';
import FormInput from '@/components/FormInput';

import Image from 'next/image';
import Link from 'next/link';
import BlogNavbar from '@/components/Navbars/Navbarforblogs';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted', formData);
      // Proceed with form submission (e.g., API call)
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <>
      <BlogNavbar/>
      <div className="min-h-screen flex items-center justify-center bg-sky-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl flex">
          <div className="w-1/2 pr-4">
            {/* <Image src={loginImage} alt="Login" className="rounded" /> */}
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-3xl font-bold mb-6 text-sky-600 text-center">Log In</h2>
            <p className="mb-4 text-gray-600 text-center">Access your account to manage your content.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <FormInput
                id="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
              <div className="flex justify-between items-center">
                <Link href="/forgot-password" className="text-sm text-sky-600 hover:underline">
                  Forgot Password?
                </Link>
                <Link href="/signup" className="text-sm text-sky-600 hover:underline">
                  Don't have an account? Sign Up
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

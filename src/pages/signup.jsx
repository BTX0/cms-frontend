import React, { useState } from 'react';
import '../app/globals.css';
import Navbar from '@/components/Navbars/Navbar';
import FormInput from '@/components/FormInput';
import Image from 'next/image';
import Footer from '@/components/Footer';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions';
    }
    return errors;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white ">
        <div className="bg-white-100 p-6 m-10 rounded shadow-md w-full max-w flex">
          <div className="w-1/2 pr-4">
            <Image src="/signup.png" alt="Signup" className="rounded"width={1000} height={300} />
          </div>
          <div className="w-1/3 pl-5" >
            <h2 className="text-3xl font-bold mb-6 text-sky-600 text-center">Sign Up</h2>
            <p className="mb-4 text-gray-600 text-center">Create your account to access exclusive features and content.</p>
            <form onSubmit={handleSubmit} className="space-y-4 text-black">
              <FormInput
                id="username"
                label="Username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
              />
              <FormInput
                id="fullName"
                label="Full Name"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
              <FormInput
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <FormInput
                id="phone"
                label="Phone Number"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <FormInput
                id="address"
                label="Address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
              />
              <FormInput
                id="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
              <FormInput
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                </select>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="termsAccepted"
                    name="termsAccepted"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="termsAccepted" className="font-medium text-gray-700">
                    I accept the <a href="#" className="text-sky-600 hover:underline">Terms and Conditions</a>
                  </label>
                  {errors.termsAccepted && <p className="text-red-500 text-xs mt-1">{errors.termsAccepted}</p>}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignupForm;

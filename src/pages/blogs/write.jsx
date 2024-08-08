import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import '../../app/globals.css';

// Import React-Quill dynamically to ensure it's only loaded in the browser
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Quill styles

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageUpload = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // for Cloudinary, or use your own upload config

    const response = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', formData);
    setImageUrl(response.data.secure_url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API route set up for blog submissions
    await axios.post('/api/blogs', {
      title,
      content,
      imageUrl,
    });

    // Reset form fields
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-sky-600">Write a New Blog</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              className="bg-white"
              modules={{
                toolbar: [
                  [{ header: '1' }, { header: '2' }, { font: [] }],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['bold', 'italic', 'underline'],
                  [{ align: [] }],
                  ['image', 'link'],
                ],
              }}
              formats={['header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'align', 'image', 'link']}
            />
          </div>

          <div className="mb-6">
            <Dropzone onDrop={handleImageUpload}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-gray-300 p-6 text-center rounded-md cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <p>Drag & drop an image here, or click to select one</p>
                </div>
              )}
            </Dropzone>
            {imageUrl && <img src={imageUrl} alt="Uploaded image" className="mt-4 w-full h-auto" />}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition duration-300"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;

import UserLayout from '../../components/UserLayout';
import '../../app/globals.css';

const ContentManagement = () => {
  return (
    <UserLayout>
      <h2 className="text-3xl font-bold mb-6">Content Management</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Example Content Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h4 className="text-xl font-bold mb-4">Blog Post Title</h4>
          <p className="text-gray-700 mb-4">Brief description of the blog post...</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit</button>
        </div>
      </div>
    </UserLayout>
  );
};

export default ContentManagement;

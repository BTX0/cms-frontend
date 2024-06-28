import AdminLayout from '../../components/AdminLayout';

const Settings = () => {
  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="site-name" className="block text-sm font-medium text-gray-700">Site Name</label>
            <input type="text" id="site-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label htmlFor="site-description" className="block text-sm font-medium text-gray-700">Site Description</label>
            <textarea id="site-description" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500" rows="3"></textarea>
          </div>
          <div>
            <label htmlFor="admin-email" className="block text-sm font-medium text-gray-700">Admin Email</label>
            <input type="email" id="admin-email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Save Settings</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Settings;

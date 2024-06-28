import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Users</h3>
          <p className="text-3xl">123</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Posts</h3>
          <p className="text-3xl">456</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Active Subscriptions</h3>
          <p className="text-3xl">789</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Revenue</h3>
          <p className="text-3xl">$12,345</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

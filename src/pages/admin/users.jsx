import AdminLayout from '../../components/AdminLayout';
import '../../app/globals.css';

const UserManagement = () => {
  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">User Management</h2>
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">User ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Row */}
          <tr className="border-t">
            <td className="p-4">1</td>
            <td className="p-4">John Doe</td>
            <td className="p-4">john@example.com</td>
            <td className="p-4">Admin</td>
            <td className="p-4">
              <button className="bg-yellow-500 text-white py-1 px-3 rounded">Edit</button>
              <button className="bg-red-500 text-white py-1 px-3 rounded ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default UserManagement;

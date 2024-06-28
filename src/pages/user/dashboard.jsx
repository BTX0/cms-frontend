import UserLayout from '../../components/UserLayout';

const UserDashboard = () => {
  return (
    <UserLayout>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Posts</h3>
          <p className="text-3xl">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          <p className="text-3xl">34</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Followers</h3>
          <p className="text-3xl">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Likes</h3>
          <p className="text-3xl">78</p>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;

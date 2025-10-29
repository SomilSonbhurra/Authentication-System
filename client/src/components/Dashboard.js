import { useEffect, useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css"; // ✅ Import CSS

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { logoutUser } = useContext(AuthContext);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  const removeUser = async (id) => {
    await API.delete(`/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="stats-card">
        <p>
          👥 Total Users: <span>{users.length}</span>
        </p>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className={`role-badge ${u.role === "admin" ? "admin" : "user"}`}>
                    {u.role}
                  </span>
                </td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => removeUser(u._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="no-users">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/auth/signup", form);

    // ✅ Defensive check
    if (res && res.data) {
      alert("Signup successful! Please login now.");
      navigate("/login");
    } else {
      console.error("Signup API returned no data:", res);
      alert("Something went wrong, please try again.");
    }

  } catch (err) {
    console.error("Signup Error:", err);

    // ✅ Prevent undefined reads
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Signup failed, please check server logs.";
    alert(message);
  }
};


  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <select name="role" onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/login" className="signup-link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

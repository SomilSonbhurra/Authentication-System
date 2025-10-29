import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import API from "../api/api";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/login", form);
    if (res && res.data) {
      loginUser(res.data);
      if (res.data.role === "admin") navigate("/dashboard");
      else navigate("/home");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("Login Error:", err);
    const message =
      err.response?.data?.message || "Server error. Please check your backend.";
    alert(message);
  }
};


  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <a href="/signup" className="login-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

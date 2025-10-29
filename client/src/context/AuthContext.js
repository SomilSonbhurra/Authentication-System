import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import API from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored);
  }, []);

  const loginUser = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.token);
    Cookies.set("token", data.token);
  };

  const logoutUser = async () => {
    await API.post("/auth/logout");
    setUser(null);
    localStorage.clear();
    Cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

"use client"; // Mark this as a Client Component

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/auth/user");
      setUser(response.data.user);
    } catch (error) {
      console.error(
        "Failed to fetch user info:",
        error.response?.data?.message || error.message
      );
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle API errors
  const handleError = (error) => {
    if (error.response?.data?.message) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    } else {
      console.error("An unexpected error occurred:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      }
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      setUser(null);
      return { error: "Login failed. Please try again." };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
      }
      return data;
    } catch (error) {
      console.error("Registration failed:", error);
      setUser(null);
      return { error: "Registration failed. Please try again." };
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

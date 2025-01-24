"use client";
import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

const Authentication = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signupForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = (data) => {
    console.log("Login data:", data);
  };

  const onSignupSubmit = (data) => {
    console.log("Signup data:", data);
  };

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 500);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 ${
        isClosing ? "fade-out" : "fade-up"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-md bg-white dark:bg-[#252f5a] shadow-xl transition-all duration-500 transform ${
          isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <RiCloseLargeLine />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {isLogin ? "Welcome back" : "Create account"}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {isLogin
                ? "Please sign in to continue"
                : "Please fill in your information"}
            </p>
          </div>

          {isLogin ? (
            // Login Form
            <form
              onSubmit={loginForm.handleSubmit(onLoginSubmit)}
              className="space-y-6"
            >
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  {...loginForm.register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  className="mt-2 w-full px-4 py-3 border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-b focus:border-red-600 dark:focus:border-red-600 transition-colors"
                  placeholder="Enter your email"
                />
                {loginForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {loginForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  {...loginForm.register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="mt-2 w-full px-4 py-3 border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-b focus:border-red-600 dark:focus:border-red-600 transition-colors"
                  placeholder="••••••••"
                />
                {loginForm.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {loginForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Sign in
              </button>
            </form>
          ) : (
            // Signup Form
            <form
              onSubmit={signupForm.handleSubmit(onSignupSubmit)}
              className="space-y-6"
            >
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  {...signupForm.register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  className="mt-2 w-full px-4 py-3 border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-b focus:border-red-600 dark:focus:border-red-600 transition-colors"
                  placeholder="Enter your name"
                />
                {signupForm.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {signupForm.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  {...signupForm.register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  className="mt-2 w-full px-4 py-3 border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-b focus:border-red-600 dark:focus:border-red-600 transition-colors"
                  placeholder="Enter your email"
                />
                {signupForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {signupForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  {...signupForm.register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="mt-2 w-full px-4 py-3 border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-b focus:border-red-600 dark:focus:border-red-600 transition-colors"
                  placeholder="••••••••"
                />
                {signupForm.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {signupForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Create account
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={handleToggle}
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

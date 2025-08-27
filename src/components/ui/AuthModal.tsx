"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignup, setIsSignup] = useState(false); // toggle between login and signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    place: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signup →", formData);
      // 🔹 Call signup API
    } else {
      console.log("Login →", { email: formData.email, password: formData.password });
      // 🔹 Call login API
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // 🔹 Replace with NextAuth.js or Firebase Google login
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        {/* Modal content */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold text-gray-900 text-center"
                >
                  {isSignup ? "Sign Up" : "Login"}
                </Dialog.Title>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {isSignup ? (
                    <>
                      {/* Signup fields */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Place
                        </label>
                        <input
                          type="text"
                          name="place"
                          value={formData.place}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                          placeholder="Enter your place"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                          placeholder="Enter password"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Login fields */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                          placeholder="Enter password"
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700"
                  >
                    {isSignup ? "Sign Up" : "Login"}
                  </button>
                </form>

                {/* Divider */}
                <div className="my-4 flex items-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="px-3 text-gray-500 text-sm">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google login */}
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-3 w-full rounded-lg border px-4 py-2 text-gray-700 font-medium hover:bg-gray-100"
                >
                  <FcGoogle size={22} />
                  Continue with Google
                </button>

                {/* Toggle link */}
                <p className="mt-4 text-center text-sm text-gray-600">
                  {isSignup ? (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsSignup(false)}
                        className="text-red-600 font-medium hover:underline"
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      New here?{" "}
                      <button
                        type="button"
                        onClick={() => setIsSignup(true)}
                        className="text-red-600 font-medium hover:underline"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </p>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="mt-6 w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-300"
                >
                  Close
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

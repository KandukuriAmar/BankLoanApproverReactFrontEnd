import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {

  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
    username: ""
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const navigate = useNavigate();

const handleSubmit = async (e) => { 
  e.preventDefault();
  console.log(formData); 
  try {
    console.log("Attempting to send request...");
    // http://localhost:2000/user/addUser
    const response = await axios.post("http://localhost:9090/addUser", formData, {
      headers: {
          'Content-Type': 'application/json'
      }
    });
    console.log("Response received:", response); // Check the response
    console.log(response.data);
    if (response.status === 201) {
      navigate("/login");
    }
  } catch (error) {
    console.log("Error caught:");
    console.error(error); // This will help diagnose the issue in the console
    if (error.response) {
      console.error("Response error:", error.response);
      if (error.response.status === 409) {
        alert("An account with this email already exists.");
      }
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  }

  // Reset form data
  setFormData({ email: "", fullname: "", password: "", username: "" });
};



  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-100 min-h-screen p-10"> {/* Ensure full height for content */}
        <div className="mt-20 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-center text-blue-600 text-3xl mb-6">Signup</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-black">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              // placeholder="Enter your username"
              className="mb-3 p-2 border text-black rounded"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="fullname" className="mb-1 text-black">Full Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              // placeholder="Enter your full name"
              className="mb-3 p-2 border text-black rounded"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="mb-1 text-black">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              // placeholder="Enter your email"
              className="mb-3 p-2 border text-black rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password" className="mb-1 text-black">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              // placeholder="Enter your password"
              className="mb-3 p-2 border text-black rounded"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-blue-500 transition">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

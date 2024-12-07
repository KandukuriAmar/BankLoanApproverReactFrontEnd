import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const loginType = props.loginType;

  const [loginData, setLoginData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    });
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let response; // Define response outside the conditional blocks
  
    try {
      if (loginType === "user") {
        // http://localhost:2000/user/validlogin
        response = await axios.post("http://localhost:9090/validlogin", loginData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else if (loginType === "approver") {
        // http://localhost:2000/loanapprover/validloginapprover
        response = await axios.post("http://localhost:9090/validloginapprover", loginData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } else {
        // http://localhost:2000/admin/validloginadmin
        response = await axios.post("http://localhost:9090/validloginadmin", loginData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
  
      console.log(response);
  
      if (response.data === "valid") {
        localStorage.setItem("username", loginData.username);
        if(loginType == "user") navigate("/home");
        else if(loginType == "approver") navigate("/approverhome");
        else if(loginType == "admin") navigate("/adminhome"); // add this before working on admin module
      } else {
        alert(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login. Please try again.");
    }
  
    // Reset form data
    setLoginData({
      username: '',
      email: '',
      password: '',
    });
  };  


  return (
    <>
    
    <Navbar />
    <div className="font-sans bg-gray-100 p-6 md:p-12 min-h-screen pt-16">
      <h1 className="text-center text-blue-600 text-3xl font-bold mb-8 mt-24">Login {props.name}</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="username" className="block text-gray-700 mb-2">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          // placeholder="Enter your username"
          className="w-full border border-gray-300 p-2 mb-4 rounded"
          value={loginData.username}
          onChange={handleChange}
          required
          />

        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          // placeholder="Enter your email"
          className="w-full border text-slate-900 p-2 mb-4 rounded"
          value={loginData.email}
          onChange={handleChange}
          required
          />

        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          // placeholder="Enter your password"
          className="w-full border text-slate-900 p-2 mb-4 rounded"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
          Login
        </button>
      </form>
    </div>
    </>
  );
}

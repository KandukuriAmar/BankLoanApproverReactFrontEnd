import {React, useState} from 'react'
import axios from 'axios';

export default function AddLoanApprover(props) {
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
    
        try {
            if (props.name === "AddLoanApprover") {
                console.log("Attempting to add loan approver...");
                const response = await axios.post(
                    "http://localhost:9090/addLoanapprover",
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log("Loan approver added successfully:", response.data);
            } else {
                console.log("Attempting to update loan approver...");
                const response = await axios.put(
                    "http://localhost:9090/updateLoanapprover",
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                alert("Loan approver updated successfully", response.data);
            }
    
            setFormData({
                username: "",
                fullname: "",
                email: "",
                password: "",
            });
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
    
            alert(error.response?.data || "An error occurred. Please try again.");
        }
    };
    

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});

    }

  return (
    <div>
      <div className="font-sans bg-gray-100 min-h-screen p-10"> {/* Ensure full height for content */}
        <div className="mt-20 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-center text-blue-600 text-3xl mb-6">{props.name}</h1>
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
                {props.name}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

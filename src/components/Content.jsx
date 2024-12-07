import React from 'react';

export default function Content() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 p-4">
      <div className="text-center max-w-md w-full">
        <h2 className="text-white text-2xl mb-5">
          Loan Management System
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <a 
            href="/signup" 
            className="inline-block px-4 py-2 mb-2 sm:mb-0 sm:mr-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200"
          >
            Sign Up User
          </a>
          <a 
            href="/login" 
            className="inline-block px-4 py-2  mb-2 sm:mb-0 sm:mr-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-200"
          >
            LoginUser
          </a>
        </div>
        <a 
            href="/loginapprover"
            className="inline-block px-2 py-2  mb-2 sm:mb-0 sm:mr-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-200"
          >
            LoginLoanapprover
          </a>
          <a 
            href="/loginadmin"
            className="inline-block px-4 py-2  mb-2 sm:mb-0 sm:mr-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-200"
          >
            LoginAdministrator
          </a>
      </div>
    </div>
  );
}

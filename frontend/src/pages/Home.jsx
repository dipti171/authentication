import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-end items-center h-screen bg-gray-50">
      {/* Content Section Near Footer */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to PopX</h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover the best platform for your needs. Join us today to explore amazing features!
        </p>
        <div className="flex flex-col gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            <Link to="/register" className="font-semibold text-white hover:text-gray-200">Create Account</Link>
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            <Link to="/login" className="font-semibold text-white hover:text-gray-200">Already Registered? Login</Link>
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            <Link to="/profile" className="font-semibold text-white hover:text-gray-200">profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { FaKey } from "react-icons/fa"; // Key icon for dark mode toggle

const Topbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      // You can add a more robust solution here (e.g., saving to localStorage or context API)
      if (darkMode) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    };
  return (
    <div className={`flex items-center justify-between p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md`}>
      {/* Left section */}
      <span className="text-lg font-semibold">Welcome back, Alex</span>

      {/* Right section with buttons */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Request Payout
        </button>
        <button className="bg-white text-blue-500 px-4 py-2 border-2 border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none">
          Share Matrices
        </button>

        {/* Key Icon to Toggle Dark/Light Mode */}
        <button
          onClick={toggleDarkMode}
          className="text-gray-500 hover:text-gray-900 focus:outline-none"
        >
          <FaKey size={20} />
        </button>
      </div>
    </div>
  )
}

export default Topbar
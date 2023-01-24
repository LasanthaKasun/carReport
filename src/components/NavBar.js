import React from "react";
const NavBar = () => {
  return (
    <nav className="fixed z-30 w-full bg-white border-b-2 border-indigo-600">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a href="/" className="flex items-center text-xl font-bold">
              <span className="text-blue-800">Fixico</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="relative inline-block ">
              <button className="relative flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                <span className="mx-1">Hi, Lasantha</span>
              </button>
              <div className="absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

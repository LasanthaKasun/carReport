import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col w-full px-4 py-8 overflow-y-auto border-b lg:border-r lg:h-screen lg:w-64">
      <div className="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li>
              <a
                className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md "
                href="/create"
              >
                <span className="mx-1 font-medium">Damage Report</span>
              </a>
            </li>

            <li>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md bg-gray-100 hover:bg-gray-200"
                href="/list"
              >
                <span className="mx-1 font-medium">View Overview</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default SideBar;

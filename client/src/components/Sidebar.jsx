import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   // Redirect to login if no token is found
  //   if (!token) {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="/products"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Available Products</span>
            </a>
          </li>
          <li>
            <a
              href="/cart"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a1 1 0 00-1 1v1.26l-4.78.66a1 1 0 00-.55 1.89l3.46 1.94-1.66 4.47a1 1 0 001.45 1.18l4.12-2.17 4.12 2.17a1 1 0 001.45-1.18l-1.66-4.47 3.46-1.94a1 1 0 00-.55-1.89L13 4.26V3a1 1 0 00-1-1zM10 9.42l2.95 1.65-.6 1.62-2.35-1.23V9.42zm-3-1.73L9.1 5h1.8l2.25 2.69v4.01l-1.19.66L7 9.69v-.01zM4.26 6l-2.2 2.64a1 1 0 00-.26.71v4a1 1 0 001 1h4l2.27 2.73a1 1 0 001.46 0L14 18h4a1 1 0 001-1v-4a1 1 0 00-.26-.7L15.74 6h-.01L14 4.29V4a1 1 0 00-1-1h-4L6.27.27a1 1 0 00-1.46 0L4.26 2h-.01L2 4.29V6h2.27zm-.6 2H2.6L4 4.41V2.6L5.41 4h2.83L8 2.59V4h2.59L8.7 5.41H6.87L6.66 5.63l-.44 1.18L4.66 8zm10.34 0L13.34 8l.23-.59.44-1.18h1.83L16 4H9.62l.8 1.91-.44 1.18-.23.59h7.07zM13.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3">My Cart</span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm-1-6a1 1 0 112 0v2.07l1.28 1.29a1 1 0 11-1.42 1.42L10 12.41l-1.28 1.28a1 1 0 01-1.42-1.42L8.97 10V7a1 1 0 112 0v3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3">Purchased Products</span>
            </a>
          </li>
         
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

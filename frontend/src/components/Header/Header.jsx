<<<<<<< HEAD
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { useApp } from '../../context/AppContext'; // Make sure the path is correct

=======
import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.png'
>>>>>>> d8d3b63637e53367864ca77e9f3ea08933e40c83
export default function Header() {
  const { user, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-indigo-400 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <NavLink to="/" className="flex items-center font-bold text-white text-xl">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
            SCHOLARSHIP FINDER
          </NavLink>

          {/* Login / Logout Section */}
          <div className="flex items-center lg:order-2">
            {user ? (
              <>
                <span className="text-white text-sm mr-4">Hi, {user.username || 'User'}</span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </NavLink>
            )}
          </div>

          {/* Navigation Links */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="items-center flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/studentDashboard"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Student Dashboard
                </NavLink>
              </li>

              <li>
                            {user && (
  <NavLink
    to="/bookmarks"
    className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 ${
        isActive ? 'text-orange-700' : 'text-gray-700'
      } hover:text-orange-700 lg:p-0`
    }
  >
    Bookmarks
  </NavLink>
)}
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


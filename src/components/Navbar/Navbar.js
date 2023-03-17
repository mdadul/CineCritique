import React from "react";
import logo from '../../images/logo.png'
import {BsFacebook, BsLinkedin,BsInstagram} from 'react-icons/bs'
export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <a
          href="/"
          className="flex items-center whitespace-nowrap text-2xl font-black"
        >
          <span className="mr-2 text-4xl text-white">
<img src={logo} alt="logo" width={120}/>
           </span>
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          for="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="text-gray-50 md:mr-12 hover:text-white">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-50 md:mr-12 hover:text-white">
              <a href="/">About Us</a>
            </li>
            <li className="text-gray-50 md:mr-12 hover:text-white">
              <a href="/">Movies</a>
            </li>
            <li className="text-gray-50   hover:text-white flex gap-3">
              <button className="rounded-md border-2 border-white px-6 py-1 font-medium text-white transition-colors hover:bg-gray-900 hover:text-white">
                Sign In
              </button>
              <button className="rounded-md border-2 border-white px-6 py-1 font-medium text-white transition-colors hover:bg-gray-700 hover:text-white">
                Sing up
              </button>
            </li>
            <li className="md:hidden flex gap-4">
                {/* social link */}
                <a href="/" className="text-gray-50 hover:text-blue-700">
                    <BsFacebook/>
                </a>
                <a href="/" className="text-gray-50 hover:text-white">
                    <BsLinkedin/>
                </a>
                <a href="/" className="text-gray-50 hover:text-red-600">
                    <BsInstagram/>
                </a>
                
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

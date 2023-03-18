import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
export default function Signup() {
  return (
    <div class="flex w-screen flex-wrap text-slate-800">
      <div class="relative hidden h-screen select-none flex-col justify-center md:flex md:w-1/2 bg-gray-100">
        
      </div>
      <div class="flex w-full flex-col md:w-1/2 bg-gray-800 text-white">
        <div class="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" class="text-2xl font-bold text-blue-600">
           <img src={logo} alt="logo" className="w-32" />
          </Link>
        </div>
        <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p class="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p class="mt-6 text-center font-medium md:text-left">
            Already using CPS?
            <Link
              to="/login"
              class="whitespace-nowrap font-semibold text-blue-700"
            >
              Login here
            </Link>
          </p>
          <form class="flex flex-col items-stretch pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-name"
                  class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  id="login-email"
                  class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="mb-4 flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="login-password"
                  class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                />
              </div>
            </div>
            <div class="block">
              <input
                type="checkbox"
                id="remember-me"
                class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <label class="inline-block" for="remember-me">
                {"  "}
                I agree to the{" "}
                <Link class="underline" to="/">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button
              type="submit"
              class="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../common/Button";
import illustration from "../../assets/images/signup.png";
export default function Signup() {
  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="relative hidden h-screen select-none flex-col justify-center md:flex md:w-1/2 bg-gray-100">
        <img src={illustration} alt="illustration" className="w-3/4 mx-auto" />
      </div>
      <div className="flex w-full flex-col md:w-1/2 bg-gray-800 text-white">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" className="text-2xl font-bold text-blue-600">
           <img src={logo} alt="logo" className="w-32" />
          </Link>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using CINECRITIQUE?
            <Link
              to="/login"
              className="whitespace-nowrap font-semibold text-blue-700"
            >
              Login here
            </Link>
          </p>
          <form className="flex flex-col items-stretch pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  id="login-email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="login-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                />
              </div>
            </div>
            <div className="block">
              <input
                type="checkbox"
                id="remember-me"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <label className="inline-block" for="remember-me">
                {"  "}
                I agree to the{" "}
                <Link className="underline" to="/">
                  Terms and Conditions
                </Link>
              </label>
            </div>
           <Button label={"Sign up"} />
          </form>
        </div>
      </div>
    </div>
  );
}

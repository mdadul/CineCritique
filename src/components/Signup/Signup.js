import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../common/Button";
import illustration from "../../assets/images/signup.png";
import { publicPost } from "../../utilities/apiCaller";

export default function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [message, setMessage] = useState("");
  const navigateTo = useNavigate();


  const registerUser = async (e) => {
    e.preventDefault();
    if (password.current.value === confirmPassword.current.value) {
      const newUser = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const response = await publicPost(
          "/user/signup",
          JSON.stringify(newUser)
        );
        setMessage(response.message);
        navigateTo("/login");
      } catch (error) {
        setMessage(error.message);
      }
    } else{
      setMessage("Passwords do not match");
    }
  };

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
          <form
            className="flex flex-col items-stretch pt-3 md:pt-8"
            onSubmit={registerUser}
          >
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                  required
                  ref={name}
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
                  required
                  ref={email}
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
                  required
                  ref={password}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Confirm Password"
                  required
                  ref={confirmPassword}
                />
              </div>
            </div>
             {/* show message */}
          <p className="text-white text-xl text-center py-2">{message}</p>
            <Button label={"Sign up"} />
          </form>
        </div>
      </div>
    </div>
  );
}

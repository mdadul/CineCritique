import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import illustrator from '../../assets/images/login.png'
import { publicPost } from "../../utilities/apiCaller";
export default function Login() {
  const name = useRef();
  const password = useRef();

  const [message, setMessage] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
      password: password.current.value,
    }
    try {
      const response = await publicPost("/user/signin", JSON.stringify(user));
      setMessage(response.message);
      navigateTo("/");
    } catch (error) {
      setMessage(error.message);
    }
  };


  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2 bg-gray-800 text-white">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" >
            <img src={logo} alt="logo" className="w-32" />
          </Link>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome back <br />
            to <span className="text-blue-600">CINETRIQUE</span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Sign in to your account below.
          </p>

          <form className="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={handleLogin}>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="name"
                  required
                  ref={name}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="login-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                  required
                  ref={password}
                />
              </div>
            </div>
            <Link
              to="/forgotpass"
              className="mb-6 text-center text-sm font-medium text-gray-300 md:text-left"
            >
              Forgot password?
            </Link>
              {/* show message */}
          <p className="text-white text-xl text-center py-2">{message}</p>
            <Button label="Sign in" />
          </form>
          <div className="py-12 text-center">
            <p className="text-gray-300">
              Don't have an account?
              <Link
                to="/signup"
                className="whitespace-nowrap font-semibold text-gray-100 underline underline-offset-4"
              >
                Sign up for free.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen select-none  md:block md:w-1/2">
        <img src={illustrator} alt="sign in" className="absolute inset-0 mt-24 mx-auto w-1/2 object-cover" />
      </div>
    </div>
  );
}

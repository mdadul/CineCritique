import React from "react";
import video from "../../assets/video/hero.m4v";
export default function Hero() {
  return (
    <div class="bg-gray-900 text-white mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
      <div class="mx-auto max-w-xl flex flex-col-reverse space-y-6 gap-8 md:flex-row justify-between items-center lg:max-w-screen-xl">
        <div class="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
          <div class="mb-6 max-w-xl">
            <h2 class="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-snug">
              Get Ready for the <br />
              Ultimate
              <span class="inline-block text-blue-500"> Movie Experience</span>
            </h2>
            <p class="text-base text-gray-100 md:text-lg">
              Experience movies like never before with our immersive platform
            </p>
          </div>
          <div class="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
            <a
              href="/login"
              class="inline-flex h-12 w-full items-center justify-center rounded-full bg-blue-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-blue-400 focus:ring sm:w-auto"
            >
              {" "}
              Start a free Trial{" "}
            </a>
            <a
              href="/"
              class="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-blue-500 px-4 font-semibold text-blue-600 transition-colors duration-200 hover:border-y-blue-400 hover:text-blue-400 sm:w-auto"
            >
              Watch a demo video
            </a>
          </div>
        </div>
        <div class="h-full justify-center">
          <video autoPlay loop muted width={600}>
            <source src={video} type="video/mp4" />
            </video>
        </div>
      </div>
    </div>
  );
}

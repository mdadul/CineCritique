import React from 'react'
import logo from '../../assets/images/logo.png'
import Button from '../common/Button'
export default function Footer() {
  return (
    <footer class="bg-gray-800">
    <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div class="max-w-sm">
        <div class="mb-6 flex h-12 items-center space-x-2">
         <img src={logo} alt="logo" width={145}/>
        </div>
        <div class="text-gray-200 text-justify">CineCritique provides film reviews, analysis and recommendations to help movie lovers discover new and interesting films.</div>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-medium xl:mb-4 text-white">Address</div>
        <div class="text-gray-400">
          Mirsharai,Chattogram, <br />
          Bangladesh
        </div>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-medium xl:mb-4 text-white">Links</div>
        <nav aria-label="Footer Navigation" class="text-gray-400">
          <ul class="space-y-3">
            <li><a class="hover:text-blue-600 " href="/">Pricing</a></li>
            <li><a class="hover:text-blue-600 " href="/">Demo</a></li>
            <li><a class="hover:text-blue-600 " href="/">Press</a></li>
            <li><a class="hover:text-blue-600 " href="/">Support Hub</a></li>
            <li><a class="hover:text-blue-600 " href="/">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-medium xl:mb-4 text-white">Subscribe to our Newsletter</div>
        <div class="flex flex-col">
          <div class="mb-4">
            <input type="email" class="focus:outline mb-2 block h-10 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your email" />
            <Button label={'Subscribe'} />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-700">
      <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-50 sm:flex-row sm:justify-between sm:text-left">
        <div class="">Copyright © 2022 <a href='/'>CineCritique</a> | All Rights Reserved</div>
        <div class="">
          <a class="" href="/">Privacy Policy</a>
          <span>|</span>
          <a class="" href="/">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

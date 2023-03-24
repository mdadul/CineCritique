import React from 'react'
export default function Card({data}) {
  return (
    <div className="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-md md:mx-auto">
    <div className="flex flex-col md:flex-row">
      <div className="p-5 md:w-4/6 md:p-8">
        <span className="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">{data.Actors}</span>
        <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl">{data.Title}</p>
        <p className="mt-3 text-gray-600">Release Year : {data.Year}</p>
        <p className="mt-3 text-gray-600">Rating : {data.imdbRating}/10</p>
        <p className="mt-3 text-gray-600">Plot : {data.Plot}</p>
        <p className="mt-3 text-gray-600">Genre :{data.Genre}</p>
  
        <button className="mt-4 mr-2 rounded-md bg-blue-700 px-8 py-2 text-center text-white  md:mb-4  hover:bg-sky-500">Rate</button>
        <button className="mt-4 mr-2 rounded-md bg-blue-700 px-8 py-2 text-center text-white  md:mb-4  hover:bg-sky-500">Review</button>
      </div>
      <div className="mx-auto items-center w-1/2 px-5 md:flex md:p-8">
        <img className="rounded-md shadow-lg" src={data.Poster} alt={data.Title} />
      </div>
    </div>
  </div>
  
  )
}

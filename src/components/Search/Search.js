import React, { useRef, useState } from "react";
import { publicGet } from "../../utilities/apiCaller";
import Card from "../Card/Card";

export default function Search() {
  const movieName = useRef();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const name = movieName.current.value;
    if (name === "") return;
    try {
      const response = await publicGet("/movie/name/" + name);
      if (response.data.status ===200) {
        setData(response.data.data);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
    {error && <p className="text-red-500 text-center font-mono">{error}</p>}
      <div className="mx-auto w-screen max-w-screen-md py-10 leading-6">
        <form className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg" onSubmit={handleSearch}>
          <svg
            className="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" className=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
          </svg>
          <input
            type="name"
            name="search"
            className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
            placeholder="Enter movie name :"
            ref={movieName}
          />
          <button
            type="submit"
            className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-800 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
          >
            Search
          </button>
        </form>
      </div>
      
      {data && <Card data={data} />}
    </>
  );
}

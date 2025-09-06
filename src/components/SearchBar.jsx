import React, { useState } from "react";

export const SearchBar = ({ movieSearch }) => {
  const [title, setTitle] = useState("");
  return (
    <div className="flex mx-auto justify-center mt-5 text-black">
      <input
        className=" p-2 border rounded-md w-100"
        type="text"
        onChange={(e) => setTitle(e.target.value.trim())}
        placeholder="Enter the title of the movie"
      />
      <button
        className="bg-blue-400 text-white p-2 rounded-md"
        onClick={() => movieSearch(title)}
      >
        Search
      </button>
    </div>
  );
};

import React from "react";

export const Main = ({ loading, error, movie }) => {
  if (loading) {
    return <p className="text-md text-gray-800 text-center">Loading...</p>;
  }
  if (!movie) {
    return (
      <p className="text-gray-400 text-md text-center">
        Enter a text for me to find the Movie
      </p>
    );
  }
  if (error || movie.Response === "False") {
    return (
      <p className="text-red-800 text-md text-center">
        {error || "Can't find the movie"}
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-7 mx-auto text-black shadow-md border border-black border-2 p-5 w-2/3 mt-10 max-w-2xl">
      {console.log(movie)}
      <p className="text-3xl">{movie.Title}</p>
      <div className="movieInfo">
        <p className="text-sm text-gray-700">Year: {movie.Year}</p>
        <p className="text-sm text-gray-700">Genre: {movie.Genre}</p>
      </div>
      <img src={movie.Poster} alt="" className="w-full h-auto mb-4 rounded" />
      <p className="text-sm">{movie.Plot}</p>
    </div>
  );
};

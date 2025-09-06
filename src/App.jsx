import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Main } from "./components/Main";

const App = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovie = async (title) => {
    if (title.trim() === "") {
      console.log("Cant have empty title");
      setError("Title can't be empty");
    } else {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?t=${encodeURIComponent(
            title
          )}&apikey=c7d9b509`
        );
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err.message || 'Failed ');
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div>
      <h1 className="text-5xl text-center underline font-medium decoration-blue-900">
        Movie App
      </h1>
      <SearchBar movieSearch={fetchMovie} />
      <Main movie={content} error={error} loading={loading} />
    </div>
  );
};

export default App;

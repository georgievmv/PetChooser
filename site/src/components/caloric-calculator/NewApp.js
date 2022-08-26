import { useEffect, useState, useCallback } from "react";

const NewApp = () => {
  const [movies, setMovies] = useState([
    {
      episode_id: "",
      title: "",
      opening_crawl: "",
    },
  ]);
  const fetchMovies = useCallback(async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    setMovies(data.results);
  });
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      {movies.map((elem) => {
        return (
          <div key={elem.episode_id}>
            <h1>{elem.title}</h1>
            <h2>{elem.opening_crawl}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default NewApp;

import { useState, useEffect } from "react";
import Movie from "./Movie";

function MovieHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieHome;

// 1. then 사용하는 방식
//
// useEffect(() => {
//   fetch(
//     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setMovies(json.data.movies);
//       setLoading(false);
//     });
// }, []);
//
// 2. async,await 사용하는 방식
//
// const getMovies = async () => {
//   const response = await fetch(
//     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
//   );
//   const json = await response.json();
//   setMovies(json.data.movies);
//   setLoading(false);
// };
// useEffect(() => {getMovies()}, []);

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { selectID } = useParams();

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMoive = async () => {
    const json = await await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${selectID}`
      )
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMoive();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movies.title}</h1>
          <h4>연도 : {movies.year}</h4>
          <ul>
            장르 :
            {movies.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <h3>평점 : {movies.rating}</h3>
          <img src={movies.medium_cover_image}></img>
          <p>요약 : {movies.description_intro}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

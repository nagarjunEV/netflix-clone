import React, { useEffect, useState } from 'react';
import axios from './../api/baseUrl';
import './row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [moviesList, setMoviesList] = useState([]);
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  useEffect(() => {
    // console.log(`useEffect Row`);
    async function fetechData() {
      const response = await axios.get(fetchUrl);
      // console.log(`${response.data.results}`);
      setMoviesList(response.data.results);
    }
    fetechData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* Title */}
      <h2 style={{ color: 'white' }}>{title}</h2>
      {/* Cards for Movies */}
      <div className="row-posters">
        {moviesList &&
          moviesList.map((movie, i) => (
            <img
              key={i}
              className={`row-poster ${isLargeRow && 'row-poster-large'}`}
              src={`${imgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;

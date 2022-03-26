import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import axios from './../api/baseUrl';
import './row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const imgUrl = `https://image.tmdb.org/t/p/original/`;

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log(trailerUrl);

  useEffect(() => {
    // console.log(`useEffect Row`);
    async function fetechData() {
      const response = await axios.get(fetchUrl);
      // console.log(`${response.data.results}`);
      setMoviesList(response.data.results);
    }
    fetechData();
  }, [fetchUrl]);

  const playTrailer = (movie) => {
    if (trailerUrl) setTrailerUrl('');
    else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          console.log(url);
          const params = new URLSearchParams(new URL(url).search);
          setTrailerUrl(params.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      {/* Title */}
      <h2 style={{ color: 'white' }}>{title}</h2>
      {/* Cards for Movies */}
      <div className="row-posters">
        {moviesList &&
          moviesList.map((movie, i) => (
            <img
              key={movie.id}
              onClick={() => playTrailer(movie)}
              className={`row-poster ${isLargeRow && 'row-poster-large'}`}
              src={`${imgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

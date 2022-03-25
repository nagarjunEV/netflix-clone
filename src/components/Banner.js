import React, { useEffect, useState } from 'react';
import axios from './../api/baseUrl';
import urls from './../api/requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchBannerData() {
      const response = await axios.get(urls.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response?.data?.results?.length - 1)
        ]
      );
      return response;
    }
    fetchBannerData();
  }, []);

  const truncate = (str, n) => str && str.substr(0, n - 1) + `...`;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage:
          movie?.backdrop_path &&
          `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-content">
        {/* background img */}
        {/* title */}
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">MyList</button>
        </div>
        {/* Description */}
        <div className="banner-desc">{truncate(movie?.overview, 300)}</div>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;

import React, { useEffect, useState } from 'react';
import axios from './../api/baseUrl';

const Row = ({ title, fetchUrl }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    console.log(`useEffect Row`);
    async function fetechData() {
      const response = await axios.get(fetchUrl);
      console.log(`Reposne for ${fetchUrl} is ${response.data.results}`);
    }
    fetechData();
  }, [fetchUrl]);

  return (
    <div>
      {/* Title */}
      <h2>{title}</h2>
      {/* Cards for Movies */}
    </div>
  );
};

export default Row;

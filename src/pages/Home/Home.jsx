import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendings } from 'components/services/fetchApi';

import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendings().then(data => {
      const films = data.results;
      setFilms(films);
    });
  }, []);

  return (
    <div>
      <MoviesList films={films} location={location} />
    </div>
  );
};
export default Home;

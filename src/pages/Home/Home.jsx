import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendings } from 'components/services/fetchApi';
import { FilmList } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendings().then(data => {
      const films = data.results;
      setFilms(films);
    });
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <FilmList>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`movies/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </FilmList>
    </div>
  );
};
export default Home;

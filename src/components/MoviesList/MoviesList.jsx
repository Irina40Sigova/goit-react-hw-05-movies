import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { FilmList } from './MoviesList.styled';

export const MoviesList = ({ films, location }) => {
  return (
    <FilmList>
      {films.map(film => {
        return (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title || film.name}
            </Link>
          </li>
        );
      })}
    </FilmList>
  );
};

MoviesList.propTypes = {
  films: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
  location: propTypes.object,
};

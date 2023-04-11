import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {}, []);
  return (
    <div>
      {['movie1', 'movie2', 'movie3', 'movie4', 'movie5'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};
export default Movies;

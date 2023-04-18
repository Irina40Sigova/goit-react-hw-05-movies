import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getSearchMovies } from 'components/services/fetchApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Btn, Input, SearchBox } from './Movies.styled';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const movieName = searchParams.get('movieName') ?? '';

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieName) {
      return;
    }
    if (!error & error) {
      Notify.failure(
        `There is no movies with this ${movieName}. Please, try again!`
      );
    }
    setIsLoading(true);

    getSearchMovies(movieName)
      .then(data => {
        if (!data.results.length) {
          setIsLoading(false);
          return;
        }
        const films = data.results;
        setFilms(films);
      })
      .catch(error => setError(error.massage))
      .finally(() => setIsLoading(false));
  }, [movieName, error]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.movie.value.toLowerCase();

    if (value.trim() === '') {
      setFilms([]);
      Notify.info('Uuups!Enter any word to search movies!!!');
      return;
    }
    setSearchParams({ movieName: value });
    e.target.reset();
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <Btn type="submit"></Btn>
      </SearchBox>
      <MoviesList films={films} location={location} />

      {isLoading && <div>LOADING ...</div>}
    </>
  );
};
export default Movies;

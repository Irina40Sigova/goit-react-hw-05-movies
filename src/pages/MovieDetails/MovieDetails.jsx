import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { getMovieDetails } from 'components/services/fetchApi';
import {
  Container,
  Back,
  Box,
  Info,
  Text,
  Score,
  InfoList,
  List,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(response => {
        setMovieDetails(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetails;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : `http://www.suryalaya.org/images/no_image.jpg`;

  const genresList = genres?.map(({ name }) => name).join(', ');

  const backLinkHref = location.state?.from ?? '/';

  return (
    <Container>
      <Back to={backLinkHref}> ⬅ Go back </Back>

      {isLoading && <div>LOADING ...</div>}
      <Box>
        <img
          src={poster}
          width={320}
          height={380}
          loading="lazy"
          alt="poster"
        />
        <Info>
          <h2>{original_title}</h2>
          <Score>User score: {scoreToFixed}%</Score>
          <h3>Overview</h3>
          <Text>{overview} </Text>
          <h3>Genres</h3>
          <Text>{genresList}</Text>
        </Info>
      </Box>

      <Text>Additional information</Text>
      <List>
        <InfoList to="cast" state={{ from: backLinkHref }}>
          Cast
        </InfoList>

        <InfoList to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </InfoList>
      </List>

      <Outlet />
    </Container>
  );
};

MovieDetails.propTypes = {
  movieDetails: propTypes.shape({
    original_title: propTypes.string.isRequired,
    overview: propTypes.string,
    genres: propTypes.arrayOf(propTypes.object),
    poster_path: propTypes.string,
    vote_average: propTypes.number.isRequired,
  }),
};

export default MovieDetails;

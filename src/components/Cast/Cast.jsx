import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/services/fetchApi';
import { CastList, CastItem, Name, Character } from './Cast.styled';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => {
        setCastList(data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <CastList>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={150}
                height={200}
              />
              <Name>{name}</Name>
              <Character>{character}</Character>
            </CastItem>
          ))
        : "Sorry, there isn't any info :("}
    </CastList>
  );
};

export default Cast;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/services/fetchApi';
import { Author, Content, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(data => {
        setReviewsList(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <ReviewsList>
      {reviewsList.length > 0
        ? reviewsList.map(({ author, content, id }) => (
            <li key={id}>
              <Author>Author: {author}</Author>
              <Content>Author: {content}</Content>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ReviewsList>
  );
};

export default Reviews;

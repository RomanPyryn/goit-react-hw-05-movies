import { Link } from 'react-router-dom';
import {
  MovieAdditionalInfoBox,
  MovieAdditionalInfoList,
  MovieAdditionalInfoItem,
} from './MovieAdditionalInfo.styled';

const MovieAdditionalInfo = () => {
  return (
    <MovieAdditionalInfoBox>
      <h3>Additional information</h3>
      <MovieAdditionalInfoList>
        <MovieAdditionalInfoItem>
          <Link to="cast">Cast</Link>
        </MovieAdditionalInfoItem>
        <MovieAdditionalInfoItem>
          <Link to="reviews">Reviews</Link>
        </MovieAdditionalInfoItem>
      </MovieAdditionalInfoList>
    </MovieAdditionalInfoBox>
  );
};

export default MovieAdditionalInfo;

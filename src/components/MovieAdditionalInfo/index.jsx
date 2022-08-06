import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  MovieAdditionalInfoBox,
  MovieAdditionalInfoList,
  MovieAdditionalInfoItem,
} from './MovieAdditionalInfo.styled';

const MovieAdditionalInfo = ({onGoBack}) => {
  return (
    <MovieAdditionalInfoBox>
      <h3>Additional information</h3>
      <MovieAdditionalInfoList>
        <MovieAdditionalInfoItem>
          <Link to="cast" state={{ from: onGoBack }}>Cast</Link>
        </MovieAdditionalInfoItem>
        <MovieAdditionalInfoItem>
          <Link to="reviews" state={{ from: onGoBack }}>Reviews</Link>
        </MovieAdditionalInfoItem>
      </MovieAdditionalInfoList>
    </MovieAdditionalInfoBox>
  );
};

MovieAdditionalInfo.propTypes = {
  onGoBack: PropTypes.object.isRequired,
};

export default MovieAdditionalInfo;

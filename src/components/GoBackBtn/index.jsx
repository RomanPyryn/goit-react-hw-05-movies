import { useLocation } from 'react-router-dom';
import { GoBackButton } from './GoBackBtn.styled';

const GoBackBtn = () => {
  const location = useLocation();

  return (
    <GoBackButton to={location?.state?.from}>
      Go back
    </GoBackButton>
  );
};

export default GoBackBtn;


import { useNavigate, useLocation } from 'react-router-dom';
import { GoBackButton } from './GoBackBtn.styled';

const GoBackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <GoBackButton type="button" onClick={() => navigate(`${location?.state?.from}`)}>
      Go back
    </GoBackButton>
  );
};

export default GoBackBtn;

import { useNavigate } from 'react-router-dom';
import { GoBackButton } from './GoBackBtn.styled';

const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <GoBackButton type="button" onClick={() => navigate(-1)}>
      Go back
    </GoBackButton>
  );
};

export default GoBackBtn;

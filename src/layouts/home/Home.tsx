import { useNavigate } from 'react-router-dom';
import { RoutesConstants } from '../../routes/RoutesConstant';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(RoutesConstants.DUMMY)}>dummy</button>
    </div>
  );
};

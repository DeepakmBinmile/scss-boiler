import { RoutesConstants } from '../../routes/RoutesConstant';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(RoutesConstants.DUMMY)}>dummy</button>
    </div>
  );
};

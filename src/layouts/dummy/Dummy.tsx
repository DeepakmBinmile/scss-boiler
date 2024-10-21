import { RoutesConstants } from '../../routes/RoutesConstant';
import { useNavigate } from 'react-router-dom';

export const Dummy = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate(RoutesConstants.DUMMY)}>Home</button>
      </div>
    </div>
  );
};

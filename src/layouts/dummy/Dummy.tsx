import { useNavigate } from 'react-router-dom';

import { RoutesConstants } from '../../routes/RoutesConstant';

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

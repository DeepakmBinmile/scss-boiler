import { createBrowserRouter } from 'react-router-dom';

import { Dummy } from '../layouts/dummy/Dummy';
import { Home } from '../layouts/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dummyRoute',
    element: <Dummy />,
  },
]);

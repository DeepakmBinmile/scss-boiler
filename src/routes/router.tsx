
import { Dummy } from '../layouts/dummy/Dummy';
import { Home } from '../layouts/home/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: 'home',
    element: <Home/>,
  },
  {
    path: 'dummyRoute',
    element: <Dummy/>,
  },
]);

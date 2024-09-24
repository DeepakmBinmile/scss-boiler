import { Provider } from 'react-redux';
import './App.scss';
import { RouterProvider } from 'react-router-dom';

import { store } from './redux/store/store';
import { router } from './routes/router';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

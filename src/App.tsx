import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './redux/store/store';
import ThemeProvider from './context/theme-provider';
import { ModeToggle } from './components/theme-toggle/mode-toggle';
import { router } from './routes/router';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <div>
          <ModeToggle />
          <RouterProvider router={router} />
          <h1>Hi check the scss here</h1>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

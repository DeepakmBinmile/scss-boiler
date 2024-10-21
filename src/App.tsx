import ExampleForm from './components/form/ExampleForm';
import { ModeToggle } from './components/theme-toggle/mode-toggle';
import ThemeProvider from './context/theme-provider';
import { store } from './redux/store/store';
import { router } from './routes/router';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <div>
          <ModeToggle/>
          <RouterProvider router={router}/>
          <h1>Hi check the scss here</h1>
          <ExampleForm/>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

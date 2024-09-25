import { Provider } from 'react-redux';

import { store } from './redux/store/store';
import ThemeProvider from './context/theme-provider';
import { ModeToggle } from './components/theme-toggle/mode-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <div>
          <ModeToggle />
          <h1>Hi check the scss here</h1>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

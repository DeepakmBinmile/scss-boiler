import { Provider } from 'react-redux';

import { store } from './redux/store/store';
import ThemeProvider from './context/theme-provider';
import { ModeToggle } from './components/theme-toggle/mode-toggle';
import ChartsExample from './components/charts/example';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <div>
          <ModeToggle />
          <ChartsExample />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

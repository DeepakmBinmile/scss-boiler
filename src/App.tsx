import { Provider } from 'react-redux';

import { store } from './redux/store/store';
import ThemeProvider from './context/theme-provider';
import { ModeToggle } from './components/theme-toggle/mode-toggle';
import { BreadcrumbDemo } from './components/breadcrumb/example/breadcrumbs-1';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <div>
          <BreadcrumbDemo
            breadcrumbItems={[
              { label: 'Home', href: '/' },
              { label: 'docs', href: '/docs/' },
              { label: 'Components' },
              { label: 'Breadcrumb' },
            ]}
            config={{
              showLastAsLink: false,
            }}
          />

          <ModeToggle />
          <h1>Hi check the scss here</h1>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

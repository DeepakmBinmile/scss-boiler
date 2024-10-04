import { useState } from 'react';
import { Provider } from 'react-redux';

import MyForm from './components/myForm';
import { BreadcrumbDemo } from './components/breadcrumb/example/breadcrumbs-1';
import Button from './components/button/button';
import UserIcon from './assets/imagesData/UserIcon';
import ThemeProvider from './context/theme-provider';
import { store } from './redux/store/store';
import { ModeToggle } from './components/theme-toggle/mode-toggle';
import ExampleAutoComplete from './components/mui-custom-autoComplete/ExampleAutoComplete';

function App() {
  const [loading] = useState(true);

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
          <h1>My Form</h1>
          <MyForm />
          <div>
            <h1>This is a default Button </h1>
            <h4>Default Button with primary variant and medium size </h4>
            <Button boxShadow="lg" borderRadius="lg">
              Default Button{' '}
            </Button>

            <h1>This is a default Button </h1>
            <h4>Default Button with Secondary variant with medium size</h4>
            <Button boxShadow="md" borderRadius="lg" variant="secondary">
              Default Button{' '}
            </Button>

            <h1>Small size button</h1>
            <h4>Button with small size and primary varient </h4>
            <Button size="small">Small size </Button>

            <h1>Medium size button</h1>
            <h4>Button with medium size and primary varient </h4>
            <Button size="medium">Medium size </Button>

            <h1>Large size button</h1>
            <h4>Button with large size and secondary varient </h4>
            <Button size="large" variant="secondary">
              Large size{' '}
            </Button>

            <h1>Button with Icon</h1>
            <h4>This is a button in which icon is passed as a prop and secondary varient is used </h4>
            <Button icon={<UserIcon />} size="medium" variant="secondary">
              Button with Icon
            </Button>
            <h1>Button with loader</h1>
            <h4>This is a button with loader and the loading is set true </h4>
            <Button variant="primary" size="medium" loading={loading}>
              Submit
            </Button>
          </div>
          <ExampleAutoComplete />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

import MyForm from "./components/myForm";
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
          <h1>My Form</h1>
          <MyForm />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

import { Provider } from 'react-redux';

import './App.scss';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="loginOuter">
        <h1>Hi check the scss here</h1>
      </div>
    </Provider>
  );
}

export default App;

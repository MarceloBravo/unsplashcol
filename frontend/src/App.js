import { Provider } from 'react-redux';
import RoutesApp from './routes/RoutesApp';
import store from './redux'

import './App.css';

function App() {
  return (
      <Provider store={store}>
        <RoutesApp/>
      </Provider>
  );
}

export default App;

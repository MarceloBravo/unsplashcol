import { Provider } from 'react-redux';
import RoutesApp from './routes/RoutesApp';
import store from './redux'

import './App.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

function App() {
  return (
      <Provider store={store}>
        <ErrorBoundary>
          <RoutesApp/>
        </ErrorBoundary>
      </Provider>
  );
}

export default App;

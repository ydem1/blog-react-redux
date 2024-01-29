import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import './index.scss';
import { App } from './App';
import { store } from './store/store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const Root = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

root.render(<Root />);

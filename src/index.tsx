import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './firebase';

import 'bulma';

import '@fortawesome/fontawesome-free/css/all.css';

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

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { loadRoles } from './actions/roleActions';
import configureStore from './store/configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();
store.dispatch(loadRoles());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { loadRoles } from './actions/roleActions';
import configureStore from './store/configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './bower_components/components-font-awesome/css/font-awesome.min.css';
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
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

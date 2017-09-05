import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import RolesPage from './components/role/RolesPage';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={HomePage} />
    <Route path="roles" component={RolesPage} />
  </Route>
);

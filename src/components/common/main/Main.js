import React from 'react';
import { Link, Router, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from '../../home/HomePage';
import RolesPage from '../../role/RolesPage';

const Main = (props) => {
  return (
    <div className="loggent-app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/roles" component={RolesPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Main;

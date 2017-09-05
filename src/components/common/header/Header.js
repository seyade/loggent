import React from 'react';
import { Link, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const Header = (props) => {
  const history = createBrowserHistory();

  return (
    <header className="header">
      <h1>LOGGENT</h1>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/roles">Roles</Link>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';

const HomePage = () => {
  return (
    <article className="loggent-home">
      <h1 className="loggent-home__title">Manage your job applications</h1>
      <section className="loggent-home__intro">
        <h2>Keep track of all your job applications made through agencies.</h2>
        <p>It can be hard to remember which job you've applied for when you've received so many ads from agencies, who called you, what roles it was, when is the interview. This app will help you manage all that.</p>

        <Link to="/roles">Get started</Link>

      </section>
    </article>
  );
};

export default HomePage;

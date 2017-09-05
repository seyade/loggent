import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './common/header/Header';
import Main from './common/main/Main';
import Footer from './common/footer/Footer';

import './App.scss';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

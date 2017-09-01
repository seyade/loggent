import React, { Component } from 'react';
import LoggentForm from './common/LoggentForm';
import HEADER from './common/header/Header';
import Footer from './common/footer/Footer';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (fields) => {
    console.log('APP fields', fields);
  };

  render() {
    return (
      <div className="App">
        <HEADER />

        <div className="loggent-form">
          <LoggentForm onSubmit={this.handleSubmit} />
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;

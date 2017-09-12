import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';

import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import Button from './Button';
import './Forms.scss';

/**
  * FAKE DATA
  *
  Head of front end development
  Miu Furinji
  Vivid Resources
  0207 123 45 67
  miu.furinji@vivid.com
  Expert understanding of HTML and CSS, also would have used SASS or LESS previously. Ideally with React.js and Redux.

  Senior JavaScript Developer
  Ella Donley
  La Fosse Associate
  0207 209 3220
  ella.donley@lafosse.com
  This role is developing with React. You will be building new features onto an existing mobile app at a start-up based in Shoreditch.
  */

class LoggentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      agent: '',
      agency: '',
      phone: '',
      email: '',
      description: '',
      createdAt: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = (e) => {
    e.preventDefault();
    console.log('Form state: ', this.state);
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="loggent-form">
        <section className="loggent-form__info">

          <h3 className="loggent-form__title">Enter role info</h3>

          <TextInput
            id="role-title"
            label="Role Title"
            name="title"
            placeholder="Role title..."
            value={this.state.title}
            onChange={this.handleChange} />

          <TextInput
            id="agent-name"
            label="Agent name"
            name="agent"
            placeholder="Agent name..."
            value={this.state.agent}
            onChange={this.handleChange} />

          <TextInput
            id="agency"
            label="Agency"
            name="agency"
            placeholder="Agency..."
            value={this.state.agency}
            onChange={this.handleChange} />

          <TextInput
            id="agency-contact"
            label="Phone"
            name="phone"
            placeholder="Phone..."
            value={this.state.phone}
            onChange={this.handleChange} />

          <TextInput
            id="agency-contact"
            label="Email"
            name="email"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.handleChange} />
        </section>

        <section className="loggent-form__description">
          <TextAreaInput
            id="role-descr"
            name="description"
            label="Role info"
            placeholder="Add extra info..."
            rows={10}
            cols={80}
            value={this.state.description}
            onChange={this.handleChange} />
        </section>

        <section className="loggent-form__form-end">
          <Button
            type="submit"
            onSave={e => this.handleSave(e)}
            text="SAVE ROLE" />
        </section>

        <span className="loggent-form__close">X</span>

      </form>
    );
  }
};

export default LoggentForm;

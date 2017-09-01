import React, { Component } from 'react';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import Button from './Button';

/**
  *
  * Fake data for form
  *
  * - title: "Head of front end development"
  * - agent: "Miu Furinji"
  * - agency: "Vivid Resources"
  * - phone: "0207 123 45 67"
  * - email: "miu.furinji@vivid.com"
  * - description: "Expert understanding of HTML and CSS, also would have used SASS or LESS
  *                previously. Ideally with React.js and Redux."
  *
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="loggent-form">

        <TextInput
          id="role-title"
          label="Role Title"
          name="title"
          placeholder="Title..."
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

        <TextAreaInput
          id="role-descr"
          name="description"
          label="Role info"
          placeholder="Role description"
          rows={10}
          cols={80}
          value={this.state.description}
          onChange={this.handleChange} />

        <br />

        <Button
          type="submit"
          onSave={e => this.handleSave(e)}
          text="Save" />

      </form>
    );
  }
};

export default LoggentForm;

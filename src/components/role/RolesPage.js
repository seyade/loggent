import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import * as roleActions from '../../actions/roleActions';
import LoggentForm from '../common/forms/LoggentForm';
import RolesList from './RolesList';
import './Role.scss';

class RolesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (role) => {
    console.log('APP role', role);

    this.props.saveRole(role);

    this.setState((prevState) => {
      return {
        roles: this.props.roles
      };
    });

    console.log('State: ', this.props.roles);
  };

  render() {
    return (
      <article className="loggent box--flex clearfix">
        <div className="loggent-form-panel box-item--flex">
          <LoggentForm onSubmit={this.handleSubmit} />
        </div>
        <div className="loggent-cards-panel box-item--flex">
          <RolesList roles={this.props.roles} />
        </div>
      </article>
    );
  }

};

function mapStateToProps(state, ownProps) {
  return {
    roles: state.roles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveRole: role => dispatch(roleActions.saveRole(role)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RolesPage);

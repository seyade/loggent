import * as types from './actionTypes';
import axios from 'axios';

export function loadRolesSuccess(roles) {
  return {
    type: types.LOAD_ROLES_SUCCESS,
    roles,
  };
}

export function createRoleSuccess(role) {
  return {
    type: types.CREATE_ROLE_SUCCESS,
    role,
  };
}

export function loadRoles() {
  // a thunk always returns a function that accepts a dispatch
  return dispatch => {
    return axios.get('https://loggent-ff273.firebaseio.com/')
      .then(role => {
        console.log('Roles: ', roles);
      });
  };
}


export function saveRole(course) {
  return (dispatch, getState) => {
    return axios.post('https://loggent-ff273.firebaseio.com/')
      .then(role => {
        if (role.id) {
          dispatch(createRoleSuccess(role));
        }
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function createRole() {
  // a thunk always returns a function that accepts a dispatch
  return dispatch => {
    return axios.post('https://loggent-ff273.firebaseio.com/')
      .then(role => {
        console.log('Role created: ', role);
      });
  };
}

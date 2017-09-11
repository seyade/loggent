import * as types from './actionTypes';
import axios from 'axios';

const apiUrl = 'https://59af0ee5f6443e0011ce20ff.mockapi.io/api/v1/roles';

export function loadRolesSuccess(roles) {
  return {
    type: types.LOAD_ROLES_SUCCESS,
    roles: roles.data,
  };
}

export function saveRoleSuccess(role) {
  return {
    type: types.SAVE_ROLE_SUCCESS,
    role,
  };
}

export function loadRoles() {
  return dispatch => {
    return axios.get(apiUrl)
      .then(roles => {
        console.log('Roles from actions: ', roles);
        dispatch(loadRolesSuccess(roles));
      })
      .catch(error => {
        if (error) {
          console.log('Oops! We need to fix this.', error);
        }
      });
  };
}

export function saveRole(role) {
  return (dispatch, getState) => {
    return axios.post(apiUrl, role)
      .then(savedRole => {
        console.log('Role: ', savedRole);
        dispatch(saveRoleSuccess(savedRole));
        console.log('Get state: ', getState());
      })
      .catch(error => {
        if (error) {
          console.log('Oops! Role not saved.', error);
        }
      });
  };
}

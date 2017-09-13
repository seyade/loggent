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
    role: role.data,
  };
}

export function deleteRoleSuccess(role) {
  return {
    type: types.DELETE_ROLE_SUCCESS,
    role: role.data,
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

export function deleteRole(role) {
  return (dispatch, getState) => {
    return axios.delete(apiUrl, role)
      .then(() => {
      })
      .catch(error => {
        if (error) {
          console.log('Oops! Role not deleted.', error);
        }
      });
  };
}

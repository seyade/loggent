import * as types from '../actions/actionTypes';

export default function roleReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_ROLES_SUCCESS:
      return action.roles;

    case types.SAVE_ROLE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.role)
      ];

    default:
      return state;
  }
}

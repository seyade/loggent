import * as types from '../actions/roleActions';

export function roleReducer(state = [], action) {
  swith(sction.type) {
    case types.CREATE_ROLE_SUCCESS:
      return [
        ...roles,
        Object.assign({}, action.role)
      ];
  }
}

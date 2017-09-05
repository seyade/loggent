import { combineReducers } from 'redux';
import roles from './roleReducer';

const  rootReducer = combineReducers({
  roles,
});

export default rootReducer;

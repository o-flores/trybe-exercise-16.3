import { REGISTER } from '../actions/registerAction';
import { DELETE } from '../actions/deleteAction';

const INITIAL_STATE = {
  users: [],
};

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER:
      return {...state, users: [...state.users, action.payload]};
    case DELETE:
      return {...state, users: state.users.filter(user => user.name !== action.payload.name)}
    default:
      return state;
  }
}

export default registerReducer;
import { REGISTER } from '../actions/registerAction';

const INITIAL_STATE = {
  users: [],
};

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER:
      return {...state, users: [...state.users, action.payload]};
    default:
      return state;
  }
}

export default registerReducer;
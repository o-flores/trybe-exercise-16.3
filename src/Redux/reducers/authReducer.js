import { LOGIN } from '../actions/authAction';

const INITIAL_STATE = {
  authentication: false,
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, authentication: action.payload};
    default:
      return state;
  }
}

export default authReducer;

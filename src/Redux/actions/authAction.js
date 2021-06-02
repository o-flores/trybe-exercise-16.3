export const LOGIN = 'LOGIN';

export const authAction = ({email,password}) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  }
})
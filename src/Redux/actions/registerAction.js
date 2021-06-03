export const REGISTER = 'REGISTER';

export const registerAction = ({name , email, age}) => ({
  type: REGISTER,
  payload: {
    name,
    email,
    age,
  }
})
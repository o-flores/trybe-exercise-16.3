import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor='email'>
          Login:
          <input name='email' type='email'></input>
        </label>

        <label htmlFor='password'>
          Senha:
          <input name='password' type='password'></input>
        </label>

        <button type='button'>Entrar</button>
      </form>
    )
  }
}

export default Form;

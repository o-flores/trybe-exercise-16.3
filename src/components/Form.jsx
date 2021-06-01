import React from 'react';
import { connect } from 'react-redux';
import { authAction } from '../Redux/actions/authAction';

class Form extends React.Component {
  render() {
    const { auth } = this.props;
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

        <button onClick={ () => auth() } type='button'>Entrar</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: () => dispatch(authAction())
})

export default connect(null, mapDispatchToProps)(Form);

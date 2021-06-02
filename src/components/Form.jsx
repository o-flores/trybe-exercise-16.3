import React from 'react';
import { connect } from 'react-redux';
import { authAction } from '../Redux/actions/authAction';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { auth } = this.props;
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor='email'>
          Login:
          <input onChange={ this.handleChange } name='email' type='email'></input>
        </label>

        <label htmlFor='password'>
          Senha:
          <input onChange={ this.handleChange } name='password' type='password'></input>
        </label>

        <button onClick={ () => auth({email, password}) } type='button'>Entrar</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: (value) => dispatch(authAction(value))
})

export default connect(null, mapDispatchToProps)(Form);

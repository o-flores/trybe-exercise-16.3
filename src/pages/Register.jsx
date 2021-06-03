import React from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../Redux/actions/registerAction';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      age: '',
      name: '',
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { register } = this.props;
    const { email, age, name } = this.state;
    return (
      <form>
        <label htmlFor='name'>
          Nome:
          <input onChange={ this.handleChange } name='name' type='text'></input>
        </label>

        <label htmlFor='age'>
          Idade:
          <input onChange={ this.handleChange } name='age' type='number'></input>
        </label>

        <label htmlFor='email'>
          email:
          <input onChange={ this.handleChange } name='email' type='email'></input>
        </label>

        <button onClick={ () => register({email, age, name}) } type='button'>Cadastre</button>

      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (value) => dispatch(registerAction(value))
})

export default connect(null, mapDispatchToProps)(Register);
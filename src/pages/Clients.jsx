import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { login, registers } = this.props;
    if(!login) return <div>Login não efetuado!</div>
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
  }
}
const mapStateToProps = (state) => ({
  login: state.authReducer.authentication,
  registers: state.registerReducer.users,
})
export default connect(mapStateToProps, null)(Clients);
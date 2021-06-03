import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { login, registers } = this.props;
    if (!login.email) return <div>Login não efetuado!</div>
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <h2>Clientes</h2>
        {registers.map((user, index) => {
          return (
            <div key={index}>
                <p>{`Nome: ${user.name}`}</p>
                <p>{`Idade: ${user.age}`}</p>
                <p>{`Email: ${user.email}`}</p>
            </div>
          );
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  login: state.authReducer.authentication,
  registers: state.registerReducer.users,
})
export default connect(mapStateToProps, null)(Clients);
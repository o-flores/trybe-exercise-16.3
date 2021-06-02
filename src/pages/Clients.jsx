import React from 'react';
import { connect } from 'react-redux';

class Clients extends React.Component {
  render() {
    const { login } = this.props;
    if(!login) return <div>Nenhum cliente cadastrado!</div>
    return (
      <h1>Lista de Clientes</h1>
    )
  }
}
const mapStateToProps = (state) => ({
  login: state.authReducer.authentication,
})
export default connect(mapStateToProps, null)(Clients);
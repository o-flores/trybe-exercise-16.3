import React from 'react';
import { connect } from 'react-redux';
import { deleteAction } from '../Redux/actions/deleteAction';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  constructor(){
    super();
    this.state = {
      ordened: false,
    }
  }
  handleClick = () => {
    this.setState((prevState) => ({
      ordened: !prevState.ordened,
    }));
  }

  generateClientsList = (array) => {
    return array.map((item) => {
      return (
        <div key={item.email}>
          <p>Nome: {item.name}</p>
          <p>Idade: {item.age}</p>
          <p>Email: {item.email}</p>
          <button onClick={() => this.props.delete(item) } type='button'>X</button>
        </div>
      )
    })
  }

  ordenedList = () => {
    const { registers } = this.props;
    const list = [...registers];
    const sortList = list.sort((a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let result = 0;
      if (nameA > nameB) result = 1;
      if (nameA < nameB) result = -1
      return result;
    } );
    return sortList;
  }

  render() {
    const { ordened } = this.state;
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
        <button type='button' onClick={ this.handleClick }>Ordenar</button>
        { this.generateClientsList(ordened ? this.ordenedList() : registers)}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  delete: (value) => dispatch(deleteAction(value))
})
const mapStateToProps = (state) => ({
  login: state.authReducer.authentication,
  registers: state.registerReducer.users,
})
export default connect(mapStateToProps, mapDispatchToProps)(Clients);
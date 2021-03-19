import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
    this.alteraEstado = this.alteraEstado.bind(this);
  }

  componentDidMount() {
    this.alteraEstado();
  }

  alteraEstado() {
    setTimeout(() => this.setState({ status: false }), 1500);
  }

  render() {
    if (!this.state.status) return <Redirect to="/" />;
    return <div data-testid="404-error">Página não encontrada</div>;
  }
}

export default NotFound;

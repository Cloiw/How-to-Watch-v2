import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

class LogoBtn extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default LogoBtn;

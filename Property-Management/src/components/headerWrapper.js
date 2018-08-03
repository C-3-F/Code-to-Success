import React, { Component } from 'react';

class HeaderWrapper extends Component {
  render() {
    return (
      <div>
        <h1 className="header-wrapper__title">Welcom to HOA Manacher</h1>
        <p className="header-wrapper__subtitle">Please Sign In</p>
        {this.props.children}
      </div>
    );
  }
}

export default HeaderWrapper;

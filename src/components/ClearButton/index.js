import React, { Component } from 'react';
import './index.css';

class ClearButton extends Component {
  render() {
    return (
      <button
        className="ClearButton"
        onClick={this.props.func}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}

export default ClearButton;

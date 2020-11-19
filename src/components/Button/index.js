import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  isOperator = (val) => {
    return (
      val === '+' || val === '-' || val === 'x' || val === '÷' || val === '='
    );
  };
  isOtherOp = (val) => {
    return val === 'AC' || val === '+/-' || val === '%';
  };
  isZeroBtn = (val) => {
    return val === '0';
  };

  render() {
    return (
      <button
        className={`button ${
          this.isOperator(this.props.value) ? 'operator' : ''
        }${this.isOtherOp(this.props.value) ? 'OtherOp' : ''} ${
          this.isZeroBtn(this.props.value) ? 'zeroBtn' : ''
        }`}
        onClick={this.props.func}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Button;

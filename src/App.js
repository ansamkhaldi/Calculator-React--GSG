import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';
import ClearButton from './components/ClearButton';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    input: '',
    previousNumber: '',
    currentNumber: '',
    operator: '',
  };

  clearInput = (val) => {
    this.setState({
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    });
  };

  addToInput = (e) => {
    const val = e.target.value;
    this.setState({ input: this.state.input + val });
  };

  addDecimal = (e) => {
    const val = e.target.value;
    if (this.state.input.indexOf('.') === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZero = (e) => {
    const val = e.target.value;
    if (this.state.input !== '') {
      this.setState({ input: this.state.input + val });
    }
  };

  minus = (e) => {
    if (this.state.input === '') {
      this.setState({ input: '-' });
    }
  };

  plus = (e) => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'plus' });
  };

  subtract = (e) => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'subtract' });
  };

  multiply = (e) => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'multiply' });
  };

  divide = (e) => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'divide' });
  };

  percent = (e) => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: '' });
    this.setState({ operator: 'percent' });
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator === 'plus') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === 'subtract') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === 'multiply') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === 'divide') {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === 'percent') {
      this.setState({
        input: parseInt(this.state.previousNumber) / 100,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="input-row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <ClearButton func={this.clearInput} value="AC"></ClearButton>
            <Button func={this.minus} value="+/-"></Button>
            <Button func={this.percent} value="%"></Button>
            <Button func={this.divide} value="÷"></Button>
          </div>
          <div className="row">
            <Button func={this.addToInput} value="7"></Button>
            <Button func={this.addToInput} value="8"></Button>
            <Button func={this.addToInput} value="9"></Button>
            <Button func={this.multiply} value="x"></Button>
          </div>
          <div className="row">
            <Button func={this.addToInput} value="4"></Button>
            <Button func={this.addToInput} value="5"></Button>
            <Button func={this.addToInput} value="6"></Button>
            <Button func={this.subtract} value="-"></Button>
          </div>
          <div className="row">
            <Button func={this.addToInput} value="1"></Button>
            <Button func={this.addToInput} value="2"></Button>
            <Button func={this.addToInput} value="3"></Button>
            <Button func={this.plus} value="+"></Button>
          </div>
          <div className="row">
            <Button func={this.addZero} value="0"></Button>
            <Button func={this.addDecimal} value="."></Button>
            <Button func={this.evaluate} value="="></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './index.css';

function Input(props) {
  return (
    <div className="inputCal" contentEditable="true" data-text="0">
      {props.children}
    </div>
  );
}

export default Input;

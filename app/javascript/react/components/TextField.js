import React, { Component } from 'react';

const TextField = props => {
  return (
    <div className="nes-container is-rounded is-centered is-dark with-title">
      <p className="title">Input</p>
      <div className="nes-field">
        <label>{props.labelName}</label>
        <input
          className="nes-input"
          type="text"
          name={props.inputName}
          value={props.value}
          onChange={props.handleOnChange}
          onKeyUp={props.handleKeyDown}
        />
      </div>
    </div>
  );
};

export default TextField;

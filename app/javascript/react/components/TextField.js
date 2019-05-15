import React, { Component } from 'react';

const TextField = props => {
  return (
    <div className="nes-container is-rounded is-centered is-dark with-title">
      <p className="title">Input</p>
      <div className="nes-field">
        <label htmlFor="name_field" />
        <input
          type="text"
          name={props.inputName}
          value={props.value}
          id="name_field"
          className="nes-input"
          onChange={props.handleOnChange}
          onKeyUp={props.handleKeyDown}
        />
      </div>
    </div>
  );
};

export default TextField;

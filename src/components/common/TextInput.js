// components/common/TextInput.js
import React from 'react';

const TextInput = ({label, type, onChange, placeholder, value, id, name}) => {
  return (
    <div className="control">
      <label className="control__label" htmlFor={id}>{label}</label>
      <input type={type}
          name={name}
          className="control__input"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value} />
    </div>
  );
};

export default TextInput;

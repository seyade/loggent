import React from 'react';

const TextAreaInput = ({label, name, id, placeholder, rows, cols, onChange, value}) => {
  return (
    <div className="control">
      <label className="control__label" htmlFor={id}>{label}</label>
      <textarea
        className="control__textarea"
        name={name}
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}>
      </textarea>
    </div>
  );
};

export default TextAreaInput;

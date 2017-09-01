import React from 'react';

const Button = ({type, onSave, text}) => {
  return (
    <div className="control">
      <button className="control__button"
        type={type}
        onClick={onSave}>
        {text}
      </button>
    </div>
  );
};

export default Button;

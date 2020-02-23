import React from 'react';
import './Button.css';

function Button(props) {
  const {action, submit} = props
  return (
    <div className="Button">
      <button>{action}</button>
    </div>
  );
}

export default Button;


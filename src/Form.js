import React from 'react';
import './Form.css';
import Button from './Button';

function Form(props) {
  const {ingredientRef} = props;
  return (
    <div className="Form">
      <form onSubmit={props.submit}>
        <input
          name="ingredient"
          type="text"
          placeholder="chicken, cream..."
          ref={ingredientRef}
        />
        <Button action="submit" />
      </form>
    </div>
  );
}

export default Form;

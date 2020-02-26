import React from 'react';
import './Form.css';
import {Button, Input} from '@material-ui/core';

function Form(props) {
  const {ingredientRef} = props;
  return (
    <div className="Form">
      <form onSubmit={props.submit}>
        <Input
          name="ingredient"
          type="text"
          placeholder="chicken, cream..."
          inputRef={ingredientRef}
        />
        <Button 
          variant="contained"
          color="primary"
          size="large"
        >Submit</Button>
      </form>
    </div>
  );
}

export default Form;

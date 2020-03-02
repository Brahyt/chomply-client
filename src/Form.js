import React from 'react';
import './Form.css';
import {Button, Input, FormControl, FormHelperText} from '@material-ui/core';

function Form(props) {
  const {ingredientRef, submit} = props;
  return (
      <form onSubmit={submit}>
        <FormControl>
          <FormHelperText
            style={{margin: [10,10,0,10]}}
            id="ingredients-helper"
          >What do you want to cook with today?</FormHelperText>
          <Input
            style={{margin: [0,10,10,10]}}
            id="ingredients"
            name="ingredient"
            type="text"
            placeholder="chicken, cream..."
            inputRef={ingredientRef}
          />
          <Button
            style={{margin: 10}}
            variant="contained"
            color="primary"
            size="large"
            onClick={submit}
          >Chomp</Button>
        </FormControl>
      </form>
  );
}

export default Form;

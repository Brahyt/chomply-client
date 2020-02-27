import React from 'react';
import './Form.css';
import {Button, Input, FormControl, FormHelperText} from '@material-ui/core';

function Form(props) {
  const {ingredientRef} = props;
  return (
      <form onSubmit={props.submit}>
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
          >Chomp</Button>
        </FormControl>
      </form>
  );
}

export default Form;

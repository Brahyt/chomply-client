import React from 'react';
import './Form.css';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

function Form(props) {
  const {ingredientRef, submit} = props;
  return (
    <Box marginY="5%" width='100%'>
      <form onSubmit={submit}>
        <FormControl fullWidth={true}>
          <FormHelperText
            id="ingredients-helper">
            What do you want to cook with today?
          </FormHelperText>
          <Input
            id="ingredients"
            name="ingredient"
            type="text"
            placeholder="chicken, cream..."
            variant="outlined"
            autoFocus
            width="100%"
            inputRef={ingredientRef}
          />
          <Box marginY="3%" width="100%">
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              onClick={submit}>
              Chomp
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
}

export default Form;

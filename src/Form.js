import React from 'react';
import './Form.css';
import {
  Box,
  Button,
  TextField,
  FormControl,
  FormHelperText,
} from '@material-ui/core';


function Form(props) {
  const {ingredientRef, submit} = props;
  return (
    <Box marginY="5%" width="100%" >
      <form onSubmit={submit}>
        <FormControl fullWidth>
          <FormHelperText id="ingredients-helper" variant="outlined">
            What do you want to cook with today?
          </FormHelperText>
          <TextField
            id="ingredients"
            name="ingredient"
            type="text"
            placeholder="chicken, cream..."
            variant="outlined"
            autoFocus
            fullwidth
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

import React from 'react';
import './IngredientList.css';
import {v4 as uuidv4} from 'uuid';
import {Box, ListItem, ListItemText, Typography} from '@material-ui/core';

function IngredientList(props) {
  /*Build a list of ingredients
   * 5 tsp - cumin
   * 2 tbsp - butter
   * 1 lb - chicken
   * */
  const createList = () => {
    const {ingredients} = props;
    return ingredients.map(ingredient => {
      const {name, amount, unitShort} = ingredient;
      return (
        <ListItem
          key={uuidv4()}
        >
          <ListItemText
            primary={
              <>
                <Typography
                  variant="h5"
                >
                  {`${amount.toFixed(2)} ${unitShort} of ${name}`}
                </Typography>
              </>
              }
          />
        </ListItem>
      );
    });
  };

  return (
    <Box
      margin='5%'
    >
      {createList()}
    </Box>
  );
}

export default IngredientList;

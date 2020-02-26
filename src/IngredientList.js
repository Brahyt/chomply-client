import React from 'react';
import './IngredientList.css';
import {v4 as uuidv4} from 'uuid';
import {ListItem, ListItemText} from '@material-ui/core';

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
            primary={`${amount} ${unitShort} - ${name}`}
          />
        </ListItem>
      );
    });
  };

  console.log(props);
  return (
    <>
      {createList()}
    </>
  );
}

export default IngredientList;

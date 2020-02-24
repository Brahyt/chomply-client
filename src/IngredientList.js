import React from 'react';
import './IngredientList.css';
import {v4 as uuidv4} from 'uuid';

function IngredientList(props) {

  const createList = () => {
    const {ingredients} = props
    return ingredients.map((ingredient)=>{
      const {name, amount, unitShort} = ingredient
      return (
        <li key={uuidv4()}>{amount} {unitShort} - {name}</li>
      )
    })
  }

  console.log(props)
  return (
      <div className="IngredientList">
        <ul>
          {createList()}
        </ul>
      </div>
  );
}

export default IngredientList;

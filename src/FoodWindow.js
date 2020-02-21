import React from 'react';
import './FoodWindow.css';
import Button from './Button';
import RecipeCard from './RecipeCard';

function FoodWindow() {

  const fetchRecipe = url => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      });
  };

  const foodReducer = (state, action) => {};

  const [state, dispatch] = React.useReducer(foodReducer, {
    loading: true,
    error: null,
    data: null,
    ingrediant: [],
  });

  /*Create string from state.ingrediant for API request*/
  const createIngredientList = () => {
    const list = state.ingrediant;
    return list.join("+").toLowerCase()
  };

  /*Call Fetch from url on component load*/
  fetchRecipe(
    `${process.env.REACT_APP_API_URL}?q=${createIngredientList(
      state.ingrediant,
    )}&app_key=${process.env.REACT_APP_API_KEY}`,
  );

  return (
    <div className="FoodWindow">
      <RecipeCard />
      <p>Food Window</p>
      <Button action="submit" />
    </div>
  );
}

export default FoodWindow;

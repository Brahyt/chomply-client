import React from 'react';
import './FoodWindow.css';
import Button from './Button';
import RecipeCard from './RecipeCard';

function FoodWindow() {
  /*Quick fetch for testing purposes*/
  const fetchRecipe = url => {
    fetch(url)
      .then(resp => {
        console.log(resp)
        return resp.ok ? resp.json() : console.log(resp.status);
      })
      .then(data => {
        console.log(data);
      });
  };

  const foodReducer = (state, action) => {};

  const [state, dispatch] = React.useReducer(foodReducer, {
    loading: true,
    error: null,
    data: null,
    ingredient: ['chicken', 'cumin', 'cream', 'curry'],
  });

  /*Create string from state.ingredient for API request*/
  const createIngredientList = () => {
    const list = state.ingredient;
    return list.join().toLowerCase();
  };

  /*Call Fetch from url on component load*/
  fetchRecipe(
    `${process.env.REACT_APP_API_URL}?ingredients=${createIngredientList(
      state.ingredient,
    )}&apiKey=${process.env.REACT_APP_API_KEY}`,
  );

  return (
    <div className="FoodWindow">
      <RecipeCard />
      <p>{createIngredientList(state.ingredient)}</p>
      <p>Food Window</p>
      <Button action="submit" />
    </div>
  );
}

export default FoodWindow;

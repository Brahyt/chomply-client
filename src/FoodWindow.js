import React from 'react';
import './FoodWindow.css';
import RecipeCard from './RecipeCard';
import Form from './Form';

function FoodWindow() {
  const ingredientRef = React.useRef()

  /*Quick fetch for testing purposes*/
  const fetchRecipe = url => {
    fetch(url)
      .then(resp => {
        return resp.ok ? resp.json() : console.log('Error');
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
    ingredient: ['chicken', 'cumin', 'cream', 'poblano'],
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log("handle")
    const ingredients = ingredientRef.current.value
    dispatch({type: 'submit', ingredient: ingredients});
  };

  return (
    <div className="FoodWindow">
      <RecipeCard />
      <p>{createIngredientList(state.ingredient)}</p>
      <p>Food Window</p>
      <Form submit={handleSubmit} ingredientRef={ingredientRef}/>
    </div>
  );
}

export default FoodWindow;

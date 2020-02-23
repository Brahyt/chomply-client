import React from 'react';
import './FoodWindow.css';
import RecipeCard from './RecipeCard';
import Form from './Form';

function FoodWindow() {
  const ingredientRef = React.useRef();

  /*Quick fetch for testing purposes*/
  const fetchRecipe = url => {
    //    dispatch({type: 'fetch'})
    fetch(url)
      .then(resp => {
        return resp.ok ? resp.json() : console.log(resp);
      })
      .then(data => {
        console.log(data)
        //        dispatch({type: "success", data})
      });
  };

  const foodReducer = (state, action) => {
    if (action.type === 'submit') {
      return {
        ...state,
        ingredient: [action.ingredient],
      };
    }
    else if (action.type === 'fetch') {
      return {
        ...state,
        loading: true
      }
    }
    else if (action.type === 'success') {
      return {
        ...state,
        data: action.data,
        loading: false
      }
    }
  };

  const [state, dispatch] = React.useReducer(foodReducer, {
    loading: true,
    error: null,
    data: null,
    ingredient: [],
  });

  /*Create string from state.ingredient for API request*/
  const createIngredientList = () => {
    const list = state.ingredient;
    return list.join().toLowerCase();
  };

  /*When the component loads fetch 10 reipies from API*/
  fetchRecipe(
    `${process.env.REACT_APP_API_URL}?ingredients=${createIngredientList(
      state.ingredient,
    )}&apiKey=${process.env.REACT_APP_API_KEY}`,
  );

  /*Submiting the form will normalize the string and return it as an array
   * Example: "ChicKeN, Cream, rice" => ["chicken", "cream", "rice"]
   * */
  const handleSubmit = e => {
    e.preventDefault();
    const ingredients = ingredientRef.current.value
      .toLowerCase()
      .replace(/\s+/g, '')
      .split(',');
    dispatch({type: 'submit', ingredient: ingredients});
  };

  return (
    <div className="FoodWindow">
      <RecipeCard />
      <p>{createIngredientList(state.ingredient)}</p>
      <p>Food Window</p>
      <Form submit={handleSubmit} ingredientRef={ingredientRef} />
    </div>
  );
}

export default FoodWindow;

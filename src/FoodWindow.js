import React from 'react';
import './FoodWindow.css';
import RecipeCard from './RecipeCard';
import Form from './Form';
import {Box} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';

function FoodWindow(props) {
  const theme = useTheme();
  const ingredientRef = React.useRef();

  /*Quick fetch for testing purposes*/
  const fetchRecipe = url => {
    dispatch({type: 'fetch'});
    fetch(url)
      .then(resp => {
        return resp.ok ? resp.json() : dispatch({type: 'error'});
      })
      .then(data => {
        dispatch({type: 'success', data});
      });
  };

  /*Reducer for assign state.*/
  const foodReducer = (state, action) => {
    if (action.type === 'submit') {
      return {
        ...state,
        ingredient: [action.ingredient],
      };
    } else if (action.type === 'fetch') {
      return {
        ...state,
        loading: true,
      };
    } else if (action.type === 'success') {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    } else if (action.type === 'error') {
      return {
        ...state,
        loading: false,
        error: 'There was an error with your request',
      };
    }
  };

  const [state, dispatch] = React.useReducer(foodReducer, {
    loading: true,
    error: null,
    data: null,
    ingredient: [],
  });

  React.useEffect(() => {
    /*When the component loads fetch 10 recipies from API*/
    fetchRecipe(
      `${process.env.REACT_APP_API_URL}?ingredients=${createIngredientList(
        state.ingredient,
      )}&apiKey=${process.env.REACT_APP_API_KEY}`,
    );
  }, [state.ingredient]);

  /*Create string from state.ingredient for API request*/
  const createIngredientList = () => {
    const list = state.ingredient;
    return list.join().toLowerCase();
  };

  /*Submiting the form will normalize the string and return it as an array
   * Example: "ChicKeN, Cream, rice" => ["chicken", "cream", "rice"]
   * */
  const handleSubmit = e => {
    e.preventDefault();
    const ingredients = ingredientRef.current.value
      .toLowerCase()
      .replace(/,\s+/g, ',')
      .replace(/\s+/g, '%')
      .split(',');
    dispatch({type: 'submit', ingredient: ingredients});
  };

  return (
    //Recipe "/find" Searchbar and foodWindow
    <Box 
      className="FoodWindow" 
      width="50%"
    >
      {state.loading ? (
        <p>Loading</p>
      ) : (
        <>{state.data.length !== 0 ? <RecipeCard data={state.data} /> : null}</>
      )}
      {state.error ? <p>{state.error}</p> : null}
      <Form submit={handleSubmit} ingredientRef={ingredientRef} />
    </Box>
  );
}

export default FoodWindow;

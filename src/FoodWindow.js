import React from 'react';
import './FoodWindow.css';
import RecipeCard from './RecipeCard';
import Form from './Form';
import {Backdrop, Box, CircularProgress} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

function FoodWindow(props) {
  const ingredientRef = React.useRef();

  /*Fetch the url for recipes, return 20 recipes*/
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
    /*When the component loads fetch 20 recipies from API*/
    fetchRecipe(
      `${process.env.REACT_APP_API_URL}?ingredients=${createIngredientList(
        state.ingredient,
      )}&number=20&apiKey=${process.env.REACT_APP_API_KEY}`,
    );
  }, [state.ingredient]);

  /*Create string from state.ingredient for API request*/
  const createIngredientList = () => {
    const list = state.ingredient;
    return list.join().toLowerCase();
  };

  /*Submiting the form will normalize the string and return it as an array
   * Example: "ChicKeN, Cream, rice, Sour Cream" => ["chicken", "cream", "rice", "sour%cream"]
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

  const useStyles = makeStyles(theme => ({
    responsiveBox: {
      width: '50%',
      [theme.breakpoints.down('xs')]: {
        width: '95%',
      },
    },
  }));
  const styles = useStyles();

  const {loading, data, error} = state
  return (
    //Recipe "/find" Searchbar and foodWindow
    <Box className={`FoodWindow ${styles.responsiveBox}`}>
      {loading ? (
        <Backdrop open={loading}>
          <CircularProgress color='secondary'/>
        </Backdrop>
      ) : (
        <>{data.length !== 0 ? <RecipeCard data={data} /> : null}</>
      )}
      {error ? <p>{error}</p> : null}
      <Box>
        <Form submit={handleSubmit} ingredientRef={ingredientRef} />
      </Box>
    </Box>
  );
}

export default FoodWindow;

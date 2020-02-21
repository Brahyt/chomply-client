import React from 'react';
import './FoodWindow.css';
import Button from './Button';

function FoodWindow() {
  const foodReducer = (state, action) => {
  
  }
  const [state, dispatch] = React.useReducer(
    foodReducer,
    {loading: true, error: null, data: null}
  )
  const fetchRecipie = () => {
    //fetch recipie
    //
  }
  return (
    <div className="FoodWindow">
      <p>Food Window</p>
      <Button 
        action="submit"
      />
    </div>
  );
}

export default FoodWindow;

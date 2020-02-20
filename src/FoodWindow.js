import React from 'react';
import './FoodWindow.css';

function FoodWindow() {
  const foodReducer = (state, action) => {
  
  }
  const [state, dispatch] = React.useReducer(
    foodReducer,
    {loading: true, error: null, data: null}
  )
  return (
    <div className="FoodWindow">
      <p>Food Window</p>
    </div>
  );
}

export default FoodWindow;

import React from 'react';
import './RecipeCard.css';

function RecipeCard(props) {
  const {image, title} = props.data;
  return (
    <div className="RecipeCard">
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  );
}

/*Need url and title for props*/
RecipeCard.defaultProps = {
  data: {
    url: '',
    title: '',
  },
};

export default RecipeCard;

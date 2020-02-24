import React from 'react';
import './RecipeCard.css';

/*Need url and title for props*/

function RecipeCard(props) {
  //const {data} = props
  const image = ''
  const title = ''
  console.log(props)
  //  const {image, title} = data.pop()

  // Each time you swipe/choose next it pops a new card and displays it.
  //
  React.useEffect(()=> {

  })

  const nextRecipe = () => {

  }

  return (
    <div className="RecipeCard">
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  );
}


RecipeCard.defaultProps = {
  data: [
  {
    url: '',
    title: '',
  }
  ]
};
export default RecipeCard;

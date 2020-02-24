import React from 'react';
import './RecipeCard.css';

/*Need url and title for props*/
/*Component recives a list of objects from parent*/
/*save list of objects as state 'recipes'*/
/*display first recipe on mount*/
/*display next recipe on next click*/
/*fetch next batch of recipes if out of recipes*/

function RecipeCard(props) {
  const {data} = props
  const [recipeList, setRecipeList] = React.useState(data)
  const [currentRecipe, setCurrentRecipe] = React.useState(recipeList.pop())

  const useNextRecipe = () => {
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
      setCurrentRecipe(recipeList.pop())

    },[count])
  }

  const {title} = currentRecipe
  return (
    <div className="RecipeCard">
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

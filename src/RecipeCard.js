import React from 'react';
import './RecipeCard.css';
import IngredientList from './IngredientList';

/*Need url and title for props*/
/*Component recives a list of objects from parent*/
/*save list of objects as state 'recipes'*/
/*display first recipe on mount*/
/*display next recipe on next click*/
/*fetch next batch of recipes if out of recipes*/

function RecipeCard(props) {
  const {data} = props;
  const [recipeList, setRecipeList] = React.useState(data);
  const [currentRecipe, setCurrentRecipe] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCurrentRecipe(recipeList.pop());
  }, [count]);

  /*Combine the ingredients from missingIngredients and usedIngredients and return that*/
  const combineIngredients = recipe => {
    let ingredientList = [];
    if (recipe.length !== 0) {
      const missingIngredients = recipe.missedIngredients.map(ingredient => {
        return {
          name: ingredient.name,
          amount: ingredient.amount,
          unitShort: ingredient.unitShort,
        };
      });
      const usedIngredients = recipe.usedIngredients.map(ingredient => {
        return {
          name: ingredient.name,
          amount: ingredient.amount,
          unitShort: ingredient.unitShort,
        };
      })
      ingredientList = [...missingIngredients, ...usedIngredients];
    }
    return ingredientList;
  };

  console.log(currentRecipe)
  console.log(combineIngredients(currentRecipe))

  const {title, image} = currentRecipe;
  return (
    <div className="RecipeCard">
      <img src={image} alt="" />
      <p>{title}</p>
      <button onClick={() => setCount(count + 1)}>next</button>
      <IngredientList />
    </div>
  );
}

RecipeCard.defaultProps = {
  data: [
    {
      url: '',
      title: '',
    },
  ],
};
export default RecipeCard;

import React from 'react';
import './RecipeCard.css';
import IngredientList from './IngredientList';
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardActions,
  List,
  Typography,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

function RecipeCard(props) {
  const {data} = props;
  const [recipeList, setRecipeList] = React.useState(data);
  const [currentRecipe, setCurrentRecipe] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCurrentRecipe(recipeList.pop());
  }, [count]);

  /*Return an object that combines the ingredients from missingIngredients and usedIngredients*/
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
      });
      ingredientList = [...missingIngredients, ...usedIngredients];
    }
    return ingredientList;
  };
  const useStyles = makeStyles({
    root: {
      minWidth: '300px',
    },
  });

  const {title, image} = currentRecipe;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        image={image}
        alt="Image of the food."
        height="150"
      />
      <Box mt='5%'>
        <Typography
          variant="h4"
          align="center"
          gutterBottom="true"
          gutterTop="true">
          {title}
        </Typography>
      </Box>
      <List>
        <IngredientList ingredients={combineIngredients(currentRecipe)} />
      </List>
      <CardActions>
        <Box margin="5%">
          <Button
            onClick={() => setCount(count + 1)}
            variant="outlined"
            color="primary"
            size="small">
            Next
          </Button>
        </Box>
        <Box margin="5%">
          <Button
            onClick={() => setCount(count + 1)}
            variant="outlined"
            color="primary"
            size="small"
            disabled>
            Recipe
          </Button>
        </Box>
      </CardActions>
    </Card>
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

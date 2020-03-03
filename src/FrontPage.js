import React from 'react';
import {Button, Typography, Box} from '@material-ui/core';
import chompImg from './images/chomply.png';
import {lightBlue} from '@material-ui/core/colors';

function FrontPage(props) {
  const {history} = props;
  return (
    <Box className="FrontPage">
      <img src={chompImg} style={{width: '90%', margin: '2%'}} alt="Teeth" />
      <Button
        style={{margin: 10}}
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => {
          history.push('/find/');
        }}>
        Find Your Recipe!
      </Button>
      <Box marginY="5%" padding="5%" color="black" bgcolor={lightBlue[200]}>
        <Typography variant="h2">Recipes, Fast</Typography>
        <Typography variant="h3">
          Find recipes quickly using the ingredients you have, quickly, so you
          get get on with your chompin'... No logins, no user data, just
          recipes.
        </Typography>
      </Box>
      <Box>
        <Typography variant='h4'>Add ingredients you have...</Typography>
        <Typography variant='h4'>Recieve recipies you can make.</Typography>
        <Typography variant='h4'>Add or remove ingredients.</Typography>
        <Typography variant='h4'>Hit next to see another recipe using your ingredients.</Typography>
        <Typography variant='h4'>Check out the recipe when ready.</Typography>
      </Box>
      <Box
        bgcolor={lightBlue[200]}
        padding='5%' 
        marginY='5%'
      >
        <Typography variant='h2'>Tech Used</Typography>
      </Box>
    </Box>
  );
}

export default FrontPage;

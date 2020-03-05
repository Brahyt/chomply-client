import React from 'react';
import {Button, Typography, Box} from '@material-ui/core';
import chompImg from './images/chomply.png';
import {lightBlue} from '@material-ui/core/colors';
import materialUiIcon from './images/materialui.svg'
import reactIcon from './images/react.svg'
import jsIcon from './images/js.svg'
import phone1 from './images/phone1.png'
import phone2 from './images/phone2.png'
import phone3 from './images/phone3.png'
import phone4 from './images/phone4.png'

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
        <img src={phone1} />
        <Typography variant='h4'>Recieve recipies you can make.</Typography>
        <Typography variant='h4'>Add or remove ingredients.</Typography>
        <img src={phone2} />
        <Typography variant='h4'>Hit next to see another recipe using your ingredients.</Typography>
        <img src={phone3} />
        <Typography variant='h4'>Check out the recipe when ready.</Typography>
        <img src={phone4} />
      </Box>
      <Box
        bgcolor={lightBlue[200]}
        padding='5%' 
        marginY='5%'
      >
        <Typography variant='h2'>Tech Used</Typography>
        <Box marginY='5%' color='white'>
          <Box margin="5%">
            <img src={jsIcon} style={{width: '50%'}} />
            <Typography variant='h2' >Javascript</Typography>
          </Box>
          <Box margin="5%">
            <img src={reactIcon} style={{width: '50%'}} />
            <Typography variant='h2' >React</Typography>
          </Box>
          <Box margin="5%">
            <img src={materialUiIcon} style={{width: '50%'}} />
            <Typography variant='h2' >MaterialUI</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FrontPage;

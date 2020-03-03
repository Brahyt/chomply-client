import React from 'react';
import {Button, Typography, Box} from '@material-ui/core';
import chompImg from './images/chomply.png'
import {lightBlue} from '@material-ui/core/colors'

function FrontPage(props) {
  const {history} = props
  return (
    <Box 
      className="FrontPage"
    >
        <img 
          src={chompImg}
          style={{width: '100%', margin: '2%'}}
          alt='Teeth'
        />
          <Button
            style={{margin: 10}}
            variant="contained"
            color="secondary"
            size="large"
            onClick={()=>{history.push('/find/')}}
          >Find Your Recipe!</Button>
          <Box
            padding='5%'
            color='black'
            bgcolor={lightBlue[200]}
          >
            <Typography
              variant='h2'

            >
              Recipes Fast
            </Typography>
            <Typography
              variant='h3'
            >
              Find recipes quickly using the ingredients you have, quickly, so you get get on with your chompin'...  No logins, no user data, just recipes.
            </Typography>
          </Box>
      </Box>
  );
}

export default FrontPage;

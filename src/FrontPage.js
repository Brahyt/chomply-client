import React from 'react';
import {Button, Typography, Box} from '@material-ui/core';
import chompImg from './images/chomply.png'

function FrontPage(props) {
  const {history} = props
  return (
      <div className="FrontPage">
        <img src={chompImg}/>
          <Button
            style={{margin: 10}}
            variant="contained"
            color="secondary"
            size="large"
            onClick={()=>{history.push('/find/')}}
          >Find Your Recipe!</Button>
          <Box
            color='secondary'>
            <Typography>
              What you need
            </Typography>
          </Box>
      </div>
  );
}

export default FrontPage;

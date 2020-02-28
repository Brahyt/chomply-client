import React from 'react';
import {Button, Typography} from '@material-ui/core';

function FrontPage() {
  return (
      <div className="FrontPage">
        <Typography 
          variant='h1'
          font="Leckerli One"
        >
          Chomply
        </Typography>
          <Button 
            style={{margin: 10}}
            variant="contained"
            color="primary"
            size="large"
          >Chomp</Button>
      </div>
  );
}

export default FrontPage;

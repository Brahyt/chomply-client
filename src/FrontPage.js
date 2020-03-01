import React from 'react';
import {Button, Typography, Box} from '@material-ui/core';

function FrontPage() {
  return (
      <Box>
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
        </Box>
  );
}

export default FrontPage;

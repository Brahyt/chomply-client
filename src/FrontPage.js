import React from 'react';
import {Button, Typography} from '@material-ui/core';
import chompImg from './images/chomply.png'

function FrontPage() {
  return (
      <div className="FrontPage">
        <img src={chompImg}/>
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

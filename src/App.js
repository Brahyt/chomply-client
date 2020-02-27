import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import FoodWindow from './FoodWindow';
import FrontPage from './FrontPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import chomplyTheme from './theme';

console.log(chomplyTheme);
function App() {
  return (
    <Router>
      <ThemeProvider theme={chomplyTheme}>
        <CssBaseline />
        <Box align="center">
          <Route exact path="/" component={FrontPage} />
          <Route path="/find" component={FoodWindow} />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;

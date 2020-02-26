import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import FoodWindow from './FoodWindow';
import FrontPage from './FrontPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

function App() {
  let theme = createMuiTheme()
  theme = responsiveFontSizes(theme)
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <Route path="/" render={FrontPage} />
          <FoodWindow />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

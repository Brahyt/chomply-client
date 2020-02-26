import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import FoodWindow from './FoodWindow';
import FrontPage from './FrontPage';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline/>
        <div className="App">
          <Route path="/" render={FrontPage} />
          <FoodWindow />
        </div>
    </Router>
  );
}

export default App;

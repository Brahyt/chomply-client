import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import FoodWindow from './FoodWindow';
import FrontPage from './FrontPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" render={FrontPage} />
        <FoodWindow />
      </div>
    </Router>
  );
}

export default App;

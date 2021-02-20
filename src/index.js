import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route>
        <App />
      </Route>
    </Switch>
  </Router>, 
document.getElementById('root'));

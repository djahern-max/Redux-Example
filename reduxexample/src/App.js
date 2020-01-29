import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Prices from './components/prices/Prices';
import Posts from './components/posts/Posts';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/prices' component={Prices} />
        </Switch>
        {/* <Posts /> */}
        <Prices />
      </div>
    </Router>
  );
}

export default App;

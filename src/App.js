import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Online Store</h1>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

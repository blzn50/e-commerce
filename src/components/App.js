import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import Orders from './Orders';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders/:id" component={Orders} />
        </Switch>
      </div>
    );
  }
}

export default App;

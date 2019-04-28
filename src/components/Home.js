import React, { Component } from 'react';
import ProductListing from './ProductListing';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home page</h2>
        <ProductListing />
      </div>
    );
  }
}

export default Home;

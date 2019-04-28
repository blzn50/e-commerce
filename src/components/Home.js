import React, { Component } from 'react';
import ProductListing from './ProductListing';
import data from '../products.json';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home page</h2>
        <ProductListing products={data.products} />
      </div>
    );
  }
}

export default Home;

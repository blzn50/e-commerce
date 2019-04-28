import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { addToCart, removeFromCart } from '../actions';

const ProductListing = ({ products, addToCart, removeFromCart, cart }) => (
  <div className="product-listing">
    {products.map(product => (
      <ProductItem key={product.id} product={product} addToCart={addToCart} cart={cart} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const actionCreators = {
  addToCart,
  removeFromCart,
};

export default connect(
  mapStateToProps,
  actionCreators
)(ProductListing);

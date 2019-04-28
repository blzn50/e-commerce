import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { addToCart, removeFromCart } from '../actions';

const ProductListing = ({ products, addToCart, removeFromCart, cart }) => (
  <div className="product-listing">
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
      />
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

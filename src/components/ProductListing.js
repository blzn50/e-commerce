import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { addToCart } from '../actions';

const ProductListing = ({ products }) => (
  <div className="product-listing">
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
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
};

export default connect(
  mapStateToProps,
  actionCreators
)(ProductListing);

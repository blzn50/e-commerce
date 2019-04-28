import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { loadProducts, addToCart, removeFromCart } from '../actions';

class ProductListing extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }
  render() {
    const { products, addToCart, removeFromCart, cart } = this.props;
    return (
      <div className="product-listing">
        {products.length > 0
          ? products[0].map(product => (
              <ProductItem
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
              />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const actionCreators = {
  loadProducts,
  addToCart,
  removeFromCart,
};

export default connect(
  mapStateToProps,
  actionCreators
)(ProductListing);

import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = ({ cart }) => (
  <nav>
    <h3>Online Store</h3>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          Cart (
          {cart.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
          )
        </NavLink>
      </li>
      <li>
        <NavLink to="/checkout">Check out</NavLink>
      </li>
    </ul>
  </nav>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navigation);

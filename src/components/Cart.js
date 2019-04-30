import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, removeAllFromCart } from '../actions';

const sort = items => {
  return items.sort((a, b) => a.id < b.id);
};

const Cart = ({ cart, addToCart, removeFromCart, removeAllFromCart }) => {
  return (
    <div>
      <h2>Cart page</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {sort(cart).map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => addToCart(item)}>+</button>
              </td>
              <td>
                <button onClick={() => removeFromCart(item)}>-</button>
              </td>
              <td>
                <button onClick={() => removeAllFromCart(item)}>Remove all items</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const actionCreators = {
  addToCart,
  removeFromCart,
  removeAllFromCart,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Cart);

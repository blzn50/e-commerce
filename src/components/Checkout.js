import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm';

const submitOrder = (values, cart) => {
  const { email, name } = values.order;
  fetch('https://student-example-api.herokuapp.com/v1/orders.json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      order: {
        name,
        email,
        order_items_attributes: cart.map(item => ({
          product_id: item.id,
          qty: item.quantity,
        })),
      },
    }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert('something went wrong!');
        return;
      }
      document.location.href = `/orders/${data.id}`;
    });
};

const Checkout = ({ cart }) => {
  return (
    <div>
      <h2>Checkout page</h2>
      <div style={{ border: '1px solid blue' }}>
        <Cart />
      </div>
      <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

// const actionCreators = {
// ...
// }

export default connect(mapStateToProps)(Checkout);

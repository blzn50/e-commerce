import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CheckoutForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Your name:</label>
          <br />
          <Field type="text" name="order[name]" placeholder="Full name...." component="input" />
        </div>
        <div>
          <label htmlFor="order[email]">Email:</label>
          <br />
          <Field name="order[email]" component="input" type="email" placeholder="Your email..." />
        </div>
        <button type="submit">Submit order</button>
      </form>
    </div>
  );
};

const CheckoutFormWrapper = reduxForm({
  form: 'checkout',
})(CheckoutForm);

export default CheckoutFormWrapper;

import React from 'react';
import {connect} from 'react-redux';

const Checkout= ({}) =>{
  return (
    <div>
      <h2>Checkout page</h2>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const actionCreators = {
...
}

export default connect(mapStateToProps, actionCreators)(Checkout);
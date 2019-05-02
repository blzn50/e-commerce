import React, { Component } from 'react';

class Orders extends Component {
  state = {
    order: null,
  };

  componentDidMount() {
    fetch(`https://student-example-api.herokuapp.com/v1/orders/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          order: data,
        });
      });
  }

  renderOrder = () => {
    const { name, email, order_items } = this.state.order;
    return (
      <div>
        <h3>Order Info:</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <h4>Items</h4>
        <ul>
          {order_items &&
            order_items.map(item => {
              console.log('item: ', item);
              const {
                qty,
                product: { name, image, price, id },
              } = item;
              return (
                <li key={id}>
                  <img src={image} width={30} alt="" />
                  {name}({qty} @ {price}€} = {parseFloat(qty) * parseFloat(price)}€)
                </li>
              );
            })}
        </ul>
      </div>
    );
  };
  render() {
    const { order } = this.state;
    return (
      <div>
        <h3>My Order</h3>
        {order ? this.renderOrder() : 'Loading...'}
      </div>
    );
  }
}

export default Orders;

import React from 'react';

const ProductItem = ({ product, addToCart, removeFromCart, cartItem }) => {
  return (
    <div className="product-item">
      <h3 className="title">{product.name}</h3>
      <img src={`/products/${product.image}`} height={100} alt="" title={product.name} />
      <div className="desc">{product.description}</div>
      <div className="price">{product.price} €</div>
      <div>
        <button onClick={() => addToCart(product)} className="add-cart">
          Add to Cart ({(cartItem && cartItem.quantity) || 0})
        </button>
        {cartItem ? (
          <button onClick={() => removeFromCart(cartItem)} className="remove-cart">
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ProductItem;

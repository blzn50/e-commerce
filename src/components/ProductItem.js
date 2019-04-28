import React from 'react';

const ProductItem = ({ product, addToCart, cart }) => {
  const thisItemInCart = cart.filter(item => item.id === product.id);
  console.log('thisItemInCart: ', thisItemInCart);

  return (
    <div className="product-item">
      <h3 className="title">{product.name}</h3>
      <img src={`/products/${product.image}`} height={100} alt="" title={product.name} />
      <div className="desc">{product.description}</div>
      <div className="price">{product.price} €</div>
      <div>
        <button onClick={() => addToCart(product)} className="add-cart">
          Add to Cart ({(thisItemInCart && thisItemInCart.length) || 0})
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

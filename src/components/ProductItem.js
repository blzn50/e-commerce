import React from 'react';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <h3 className="title">{product.name}</h3>
    <img src={`/products/${product.image}`} height={100} alt="" title={product.name} />
    <div className="desc">{product.description}</div>
    <div className="price">{product.price} €</div>
    <div>
      <button className="add-cart">Add to Cart</button>
    </div>
  </div>
);

export default ProductItem;

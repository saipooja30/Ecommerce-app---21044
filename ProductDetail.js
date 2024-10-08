import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'This is Product 1' },
  { id: 2, name: 'Product 2', price: 200, description: 'This is Product 2' },
  { id: 3, name: 'Product 3', price: 300, description: 'This is Product 3' },
];

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from 'react';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-2"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold text-xl mb-2">{product.price} €</p>
            <button
              className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
              onClick={() => addToCart(product)} // Добавление товара в корзину
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
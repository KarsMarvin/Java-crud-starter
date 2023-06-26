import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Redirect to login if no token is found
    if (!token) {
      navigate('/login');
    } else {
      fetchProducts(token);
    }
  }, [navigate]);

  const fetchProducts = async (token) => {
    try {
      const headers = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };

      const response = await axios.get(
        'http://localhost:8000/api/v1/product/getAll',
        headers
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Product ID
          </th>
          <th scope="col" className="px-6 py-3">
            Product Name
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={product.code}
          >
            <td className="px-6 py-4">{product.code}</td>
            <td className="px-6 py-4">{product.productName}</td>
            <td className="px-6 py-4">${product.price}</td>
           
            <td className="px-6 py-4">
              <button  onClick={() => addToCart(product)}className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;

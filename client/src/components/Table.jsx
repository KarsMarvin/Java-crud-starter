import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditPopUp from './EditPopUp';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Redirect to login if no token is found
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const headers = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          };

          const response = await axios.get(
            'http://localhost:8000/api/v1/purchased/getAll',
            headers
          );

          setPurchases(response.data);
        }
      } catch (error) {
        // Handle fetch error
        console.log(error?.response?.data);
      }
    };

    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
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
        }
      } catch (error) {
        // Handle fetch error
        console.log(error?.response?.data);
      }
    };

    fetchPurchases();
    fetchProducts();
  }, []);

  const getProductName = (productCode) => {
    const product = products.find((product) => product.code === productCode);
    return product ? product.name : '';
  };

  const getProductPrice = (productCode) => {
    const product = products.find((product) => product.code === productCode);
    return product ? product.price : '';
  };

  const getCustomerName = (purchase) => {

    return 'John Doe';
  };


  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            No
          </th>
          <th scope="col" className="px-6 py-3">
            Customer Name
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Product Code
          </th>
          <th scope="col" className="px-6 py-3">
            Product Name
          </th>
          <th scope="col" className="px-6 py-3">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3">
            Unit Price
          </th>
          <th scope="col" className="px-6 py-3">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {purchases.map((purchase, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={purchase.id}
          >
            <td className="w-4 p-4">{index + 1}</td>
            <td className="px-6 py-4">{purchase.id}</td>
            <td className="px-6 py-4">{getCustomerName(purchase)}</td>
            <td className="px-6 py-4">{purchase.date}</td>
            <td className="px-6 py-4">{purchase.product_code}</td>
            <td className="px-6 py-4">{getProductName(purchase.product_code)}</td>
            <td className="px-6 py-4">{purchase.quantity}</td>
            <td className="px-6 py-4">{getProductPrice(purchase.product_code)}</td>
            <td className="px-6 py-4">{purchase.total}</td>
            <td className="px-6 py-4">
              <EditPopUp
                data={purchase}
                onClose={() => {
                  setIsPopupOpen(false); // Close the popup
                  // handleFormSubmit(); // Refresh the dashboard
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

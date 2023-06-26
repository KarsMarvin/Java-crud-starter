import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function BuyProductForm() {
  const [productCodes, setProductCodes] = useState([]);
  const [formData, setFormData] = useState({
    productcode: '',
    quantity: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetchProductCodes();
  }, []);

  const fetchProductCodes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/product/getAll');
      const productCodes = response.data.map((product) => product.code);
      setProductCodes(productCodes);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Save quantity
      const quantityResponse = await axios.post('http://localhost:8000/api/v1/quantity/register', {
        product_code: formData.productcode,
        quantity: formData.quantity,
        operation: 'purchase',
        date: new Date().toISOString(),

      });

      const quantityId = quantityResponse.data.id;

      const product = await axios.get(`http://localhost:8000/api/v1/product/${formData.productcode}`);
      const total = product.data.price * formData.quantity;

      // Save purchased product
      await axios.post('http://localhost:8000/api/v1/purchased/register', {
        productcode: formData.productcode,
        quantity_id: quantityId,
        total: total,
        date: new Date().toISOString(),
        
      });

      // Reset form
      setFormData({
        productcode: '',
        quantity: '',
      });

      setError('');
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      setError(error.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="px-6 py-6 md:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Buy A Product</h3>
        {error && <div className="error">{error}</div>}
        <div className="mb-6">
          <label htmlFor="productcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Code
          </label>
          <select
            id="productcode"
            name="productcode"
            value={formData.productcode}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option value="">Select Product Code</option>
            {productCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default BuyProductForm;

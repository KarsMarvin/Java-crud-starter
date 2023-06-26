// CartList.jsx

import React from 'react';
  
const CartList = ({ cartItems }) => {
    if (!cartItems || cartItems.length === 0) {
        return <p>No items in the cart</p>;
      }
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
          
        </tr>
      </thead>
      <tbody>
      {cartItems.map((item, index) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={index}
          >
               <td className="px-6 py-4">{item.code}</td>
            <td className="px-6 py-4">{item.productName}</td>
            <td className="px-6 py-4">${item.price}</td>
           
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartList;

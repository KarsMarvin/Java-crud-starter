import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditPopUp from './EditPopUp';
import { useNavigate } from 'react-router-dom';


const Table = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Redirect to login if no token is found
    if (!token) {
      navigate('/login');
      
    }
  }, [navigate]);
  

  const fetchData = async () => {
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
        'http://localhost:8000/api/v1/employee/getAll',
        headers
      );
      console.log(response.data);
      setEmployees(response.data);

      }
    } catch (error) {
      // Handle fetch error
      console.log(error?.response?.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFormSubmit = () => {
    // Logic to refresh the dashboard after form submission
    fetchData(); // Call the fetchData function again to update the employee data
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
            First name
          </th>
          <th scope="col" className="px-6 py-3">
            Last Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            National Id
          </th>
          <th scope="col" className="px-6 py-3">
            Salary
          </th>
          <th scope="col" className="px-6 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={employee._id}
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <td className="px-6 py-4">{employee.firstName}</td>
            <td className="px-6 py-4">{employee.lastName}</td>
            <td className="px-6 py-4">{employee.email}</td>
            <td className="px-6 py-4">{employee.nationalId}</td>
            <td className="px-6 py-4">{employee.salary}</td>
            <td className="px-6 py-4">
              <EditPopUp
                data={employee}
                onClose={() => {
                  setIsPopupOpen(false); // Close the popup
                  handleFormSubmit(); // Refresh the dashboard
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

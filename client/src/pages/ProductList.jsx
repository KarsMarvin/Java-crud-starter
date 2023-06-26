import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PopUpModal from '../components/AddPopUp';
import Sidebar from '../components/Sidebar';
import ProductsTable from '../components/ProductsTable';

function ProductsList() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Redirect to login if no token is found
    if (!token) {
      navigate('/login');
      return;
    }
  }, [navigate]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="relative flex-1 overflow-y-auto p-8">
          <div className="flex-1 overflow-y-auto p-8 flex justify-center ">
            <div className="relative top-8 left-32 w-3/4 ">
              <div className="realtive mb-6 ">
                <PopUpModal />
              </div>
              <ProductsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;

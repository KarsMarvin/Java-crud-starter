
import React from 'react';
import Navbar from '../components/Navbar';
import PopUpModal from '../components/PopUpModal';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

function Dashboard() {
    
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Navbar />
      <div className="relative flex-1 overflow-y-auto p-8">
      <div className="flex-1 overflow-y-auto p-8 flex justify-center ">
        <div className="relative top-8 left-32 w-3/4 ">
        <div className="absolute top-0 right-0">
            <PopUpModal />
          </div>
          <Table />
          
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
}

export default Dashboard;

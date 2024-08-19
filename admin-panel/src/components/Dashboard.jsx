import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '240px', padding: '20px' }}>
        <h1>Admin Panel Dashboard</h1>
        {/* Buraya istatistikler, grafikler ekleyebilirsiniz */}
      </div>
    </div>
  );
};

export default Dashboard;

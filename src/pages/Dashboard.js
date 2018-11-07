import React from 'react';

import HeaderBar from '../components/HeaderBar';
import ViewTabs from '../components/ViewTabs';

const Dashboard = () => {
  return (
    <>
      <div className="Dashboard">
        <HeaderBar />
        <ViewTabs />
      </div>
    </>
  );
};

export default Dashboard;

import React from 'react';

import HeaderBar from '../components/HeaderBar';
import ViewTabs from '../components/ViewTabs';

const Dashboard = props => {
  return (
    <>
      <div className="Dashboard">
        <HeaderBar />
        <ViewTabs {...props} />
      </div>
    </>
  );
};

export default Dashboard;

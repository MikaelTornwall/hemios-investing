import React from 'react';

import HeaderBar from '../components/HeaderBar';
import LandingIntro from '../components/LandingIntro';
import InvestingIntro from '../components/InvestingIntro';
import GetStarted from '../components/GetStarted';

import './LandingPage.scss';

const LandingPage = () => {
  return (
    <>
      <div className="LandingPage">
        <HeaderBar />
        <LandingIntro />
        <InvestingIntro />
        <GetStarted />
      </div>
    </>
  );
};

export default LandingPage;

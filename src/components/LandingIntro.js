import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './LandingIntro.scss';

const LandingIntro = () => {
  return (
    <>
      <div className="LandingIntro">
        <h1>Value Investing made quick and intuitive</h1>
        <p>
          Identify undervalued stocks and start making yourself financially
          independant
        </p>
        <NavLink to="/dashboard">
          <Button className="primary large">Get started!</Button>
        </NavLink>
      </div>
    </>
  );
};

export default LandingIntro;

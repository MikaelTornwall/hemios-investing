import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './LandingIntro.scss';

const LandingIntro = () => {
  return (
    <>
      <div className="LandingIntro">
        <h1>Value Investing made quick and intuitive</h1>
        <h4>
          Identify undervalued stocks and start making yourself financially
          independant
        </h4>
        <Container className="cta">
          <NavLink to="/dashboard">
            <Button className="primary huge">Get started!</Button>
          </NavLink>
        </Container>
      </div>
    </>
  );
};

export default LandingIntro;

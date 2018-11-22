import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './HeaderBar.scss';
import logo from '../assets/logo.svg';

const HeaderBar = () => {
  return (
    <>
      <div className={'header-bar'}>
        <div className="leftSided">
          <img src={logo} size="small" />
        </div>
        <div className="rightSided">
          <NavLink to="/dashboard">
            <Button className="primary">To Dashboard</Button>
          </NavLink>
          <Button className="basic primary">Login</Button>
          <Icon color="grey" name="user circle" size="big" />
        </div>
      </div>
    </>
  );
};

export default HeaderBar;

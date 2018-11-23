import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

import './HeaderBar.scss';
import logo from '../assets/logo.svg';

const HeaderBar = () => {
  return (
    <>
      <div className={'header-bar'}>
        <div className="leftSided">
          <NavLink to="/">
            <img src={logo} alt="logo" size="small" />
          </NavLink>
        </div>
        <div className="rightSided">
          {_.endsWith(window.location.href, '/dashboard') ? null : (
            <NavLink to="/dashboard">
              <Button className="primary">Dashboard</Button>
            </NavLink>
          )}
          <Button className="basic primary">Login</Button>
          <Icon color="grey" name="user circle" size="big" />
        </div>
      </div>
    </>
  );
};

export default HeaderBar;

import React from 'react';
import { Icon, Header, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import './HeaderBar.scss';

const HeaderBar = () => {
  return (
    <>
      <div className={'header-bar'}>
        <div className="leftSided">
          <Icon name="area graph" size="huge" />
          <Header as="h3">Hemios Investing</Header>
        </div>
        <div className="rightSided">
          <NavLink to="/dashboard">
            <Button className="primary">To Dashboard</Button>
          </NavLink>
          <Button className="basic primary">Login</Button>
          <FontAwesomeIcon className="fa-icon" icon="user-circle" />
        </div>
      </div>
    </>
  );
};

export default HeaderBar;

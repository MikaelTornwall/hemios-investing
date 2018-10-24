import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import './HeaderBar.scss';

const HeaderBar = () => {
  return (
    <>
      <div className={'header-bar'}>
        <Icon className={'left'} name="area graph" size="huge" />
        <Header className={'left'} as="h3">
          Hemios Investing
        </Header>
        <Icon className={'right'} name="user circle" size="huge" />
      </div>
    </>
  );
};

export default HeaderBar;

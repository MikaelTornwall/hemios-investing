import React from 'react';
import { Container, Icon, Header, Grid } from 'semantic-ui-react';
import './HeaderBar.scss';
export const HeaderBar = () => {
  return (
    <>
      <div className={'header-bar'}>
        <Icon className={'left'} name="area graph" size="huge" />
        <Header className={'left'} as="h2">
          Hemios Investing
        </Header>
        <Icon className={'right'} name="user circle" size="huge" />
      </div>
    </>
  );
};

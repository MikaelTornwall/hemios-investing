import React, { Component } from 'react';
import './App.scss';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';
import { Header, Icon } from 'semantic-ui-react';

import { HeaderBar } from './components/HeaderBar';

class App extends Component {
  render() {
    return (
      <>
        <HeaderBar className={'red'} />
        <XYPlot width={100} height={100}>
          <HorizontalGridLines />
          <LineSeries data={[{ x: 5, y: 5 }, { x: 3, y: 15 }]} />
          <XAxis />
          <YAxis />
        </XYPlot>
        <Header as="h2" icon>
          <Icon name="deaf" />
          Account Settings
          <Header.Subheader>
            Manage your account settings and set e-mail preferences.
          </Header.Subheader>
        </Header>
      </>
    );
  }
}

export default App;

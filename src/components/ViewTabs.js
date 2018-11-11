import React from 'react';
import { Tab } from 'semantic-ui-react';

import GraphCard from './GraphCard';

import ParameterAccordionContainer from '../containers/ParameterAccordionContainer';
import View from './View';

import './ViewTabs.scss';

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => (
      <Tab.Pane attached={false}>
        <View />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Tab 2',
    render: () => (
      <Tab.Pane attached={false}>
        <View />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Tab 3',
    render: () => (
      <Tab.Pane attached={false}>
        <View />
      </Tab.Pane>
    )
  }
];

const ViewTabs = () => (
  <Tab
    className={'tabs'}
    menu={{ secondary: true, pointing: true }}
    panes={panes}
  />
);

export default ViewTabs;

import React from 'react';
import { Tab } from 'semantic-ui-react';

import GraphCard from './GraphCard';
import ParameterAccordion from './ParameterAccordion';

import './ViewTabs.scss';

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => (
      <Tab.Pane attached={false}>
        <ParameterAccordion />
        <GraphCard i="1" />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Tab 2',
    render: () => (
      <Tab.Pane attached={false}>
        <ParameterAccordion />
        <GraphCard i="2" />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Tab 3',
    render: () => (
      <Tab.Pane attached={false}>
        <ParameterAccordion />
        <GraphCard i="3" />
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

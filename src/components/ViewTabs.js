import React from 'react';
import { Tab } from 'semantic-ui-react';

import View from './View';

import './ViewTabs.scss';

const ViewTabs = props => (
  <Tab
    className={'tabs'}
    menu={{ secondary: true, pointing: true }}
    panes={[
      {
        menuItem: 'Tab 1',
        render: () => (
          <Tab.Pane attached={false}>
            <View {...props} />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Tab 2',
        render: () => (
          <Tab.Pane attached={false}>
            <View {...props} />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Tab 3',
        render: () => (
          <Tab.Pane attached={false}>
            <View {...props} />
          </Tab.Pane>
        )
      }
    ]}
  />
);

export default ViewTabs;

import React from 'react';
import { Tab } from 'semantic-ui-react';

import View from './View';

import './ViewTabs.scss';

const ViewTabs = props => (
  <Tab
    renderActiveOnly={false}
    className={'tabs'}
    menu={{ secondary: true, pointing: true }}
    panes={[
      {
        menuItem: 'My portfolio',
        pane: (
          <Tab.Pane key={1}>
            <View {...props} />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Interesting companies',
        pane: (
          <Tab.Pane key={2}>
            <View {...props} />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Sandbox',
        pane: (
          <Tab.Pane key={3}>
            <View {...props} />
          </Tab.Pane>
        )
      }
    ]}
  />
);

export default ViewTabs;

import React, { Component } from 'react';
import './App.scss';

import HeaderBar from './components/HeaderBar';
import ViewTabs from './components/ViewTabs';
import ParameterAccordion from './components/ParameterAccordion';

class App extends Component {
  render() {
    return (
      <>
        <HeaderBar />
        <ParameterAccordion />
        <ViewTabs />
      </>
    );
  }
}

export default App;

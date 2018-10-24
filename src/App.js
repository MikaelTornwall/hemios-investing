import React, { Component } from 'react';
import './App.scss';

import HeaderBar from './components/HeaderBar';
import ViewTabs from './components/ViewTabs';

class App extends Component {
  render() {
    return (
      <>
        <HeaderBar />
        <ViewTabs />
      </>
    );
  }
}

export default App;

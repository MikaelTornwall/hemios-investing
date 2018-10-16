import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

class App extends Component {
  render() {
    return (
      <XYPlot width={600} height={600}>
        <HorizontalGridLines />
        <LineSeries data={[{ x: 1, y: 5 }, { x: 1, y: 5 }, { x: 3, y: 15 }]} />
        <XAxis />
        <YAxis />
      </XYPlot>
    );
  }
}

export default App;

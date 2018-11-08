import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';

class Graph extends React.Component {
  render() {
    return (
      <>
        <XYPlot width={200} height={200}>
          <HorizontalGridLines />
          <LineSeries data={[{ x: 5, y: 5 }, { x: 3, y: 15 }]} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </>
    );
  }
}

export default Graph;

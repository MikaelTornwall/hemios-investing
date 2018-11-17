import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  Crosshair
} from 'react-vis';

const DATA = [
  [
    { x: 'q1', y: 10 },
    { x: 'q2', y: 7 },
    { x: 'q3', y: 10 },
    { x: 'q4', y: 8 }
  ],
  [{ x: 'q1', y: 12 }, { x: 'q2', y: 5 }, { x: 'q3', y: 8 }, { x: 'q4', y: 3 }],
  [{ x: 'q1', y: 7 }, { x: 'q2', y: 2 }, { x: 'q3', y: 3 }, { x: 'q4', y: 4 }],
  [
    { x: 'q1', y: 15 },
    { x: 'q2', y: 10 },
    { x: 'q3', y: 10 },
    { x: 'q4', y: 12 }
  ]
];

class LineChart extends React.Component {
  state = {
    crosshairValues: [],
    data: []
  };

  async componentDidMount() {
    await this.setState({ data: DATA });
  }

  _onMouseLeave = () => {
    this.setState({ crosshairValues: [] });
  };

  _onNearestX = (value, { index }) => {
    this.setState({ crosshairValues: DATA.map(d => d[index]) });
  };

  render() {
    return (
      <>
        <XYPlot
          onMouseLeave={this._onMouseLeave}
          width={350}
          height={200}
          xType="ordinal"
        >
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {DATA.map(d => (
            <LineSeries onNearestX={this._onNearestX} data={d} />
          ))}
          <Crosshair values={this.state.crosshairValues} />
        </XYPlot>
      </>
    );
  }
}

export default LineChart;

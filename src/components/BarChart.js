import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  Hint
} from 'react-vis';

const DATA = [
  [{ x: 'q1', y: 10 }, { x: 'q2', y: 5 }, { x: 'q3', y: 15 }],
  [{ x: 'q1', y: 12 }, { x: 'q2', y: 2 }, { x: 'q3', y: 11 }]
];

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  _forgetValue = () => this.setState({ value: null });

  _rememberValue = value => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <>
        <XYPlot xType="ordinal" width={300} height={200} xDistance={100}>
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {DATA.map(d => (
            <VerticalBarSeries
              data={d}
              onValueMouseOver={this._rememberValue}
              onValueMouseOut={this._forgetValue}
            />
          ))}
          {value ? <Hint value={value} /> : null}
        </XYPlot>
      </>
    );
  }
}

export default BarChart;

import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';
import { Card } from 'semantic-ui-react';

export default class GraphBox extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Content header={'KPI_' + this.props.index} />
          <Card.Content>
            <XYPlot width={200} height={200}>
              <HorizontalGridLines />
              <LineSeries data={[{ x: 5, y: 5 }, { x: 3, y: 15 }]} />
              <XAxis />
              <YAxis />
            </XYPlot>
          </Card.Content>
        </Card>
      </>
    );
  }
}

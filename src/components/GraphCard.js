import React, { Component } from 'react';
import LineChart from './LineChart';
// import BarChart from './BarChart';
import { Card, Container } from 'semantic-ui-react';

export default class GraphCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content header={this.props.kpi.text} />
        <Card.Content>
          <LineChart kpi={this.props.kpi} companies={this.props.companies} />
        </Card.Content>
      </Card>
    );
  }
}

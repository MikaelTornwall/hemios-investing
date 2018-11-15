import React, { Component } from 'react';
import Graph from './Graph';
import { Card } from 'semantic-ui-react';

export default class GraphCard extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Content header={this.props.kpi.text} />
          <Card.Content>
            <Graph />
          </Card.Content>
        </Card>
      </>
    );
  }
}

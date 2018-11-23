import React, { Component } from 'react';
import LineChart from './LineChart';
// import BarChart from './BarChart';
import { Popup, Card, Container, Icon } from 'semantic-ui-react';

export default class GraphCard extends Component {
  makeHeader = () => {
    return (
      <Container>
        {this.props.kpi.text}
        <Popup
          trigger={<Icon className="hemios-question" name="question" />}
          content={'I need help!'}
          on="click"
          position="bottom right"
        />
      </Container>
    );
  };
  render() {
    return (
      <Card>
        <Card.Content header={this.makeHeader()} />
        <Card.Content>
          <LineChart kpi={this.props.kpi} companies={this.props.companies} />
        </Card.Content>
      </Card>
    );
  }
}

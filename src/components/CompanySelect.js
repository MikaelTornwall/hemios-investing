import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';

export default class CompanySelect extends Component {
  render() {
    return this.props.visible ? (
      <Container>
        <Dropdown placeholder="Select Company 1" fluid selection />
        <Dropdown placeholder="Select Company 2" fluid selection />
      </Container>
    ) : (
      ''
    );
  }
}

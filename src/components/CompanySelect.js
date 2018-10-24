import React from 'react';
import { Container, Dropdown, Header } from 'semantic-ui-react';

const CompanySelect = () => (
  <Container>
    <Header as="h3">Company</Header>
    <Dropdown placeholder="Select Company 1" fluid selection />
    <Dropdown placeholder="Select Company 2" fluid selection />
  </Container>
);

export default CompanySelect;

import React from 'react';
import { Container, Dropdown, Header } from 'semantic-ui-react';

const CompanySelect = () => (
  <Container>
    <Header as="h3">Time Interval</Header>
    <Dropdown placeholder="start" fluid selection />
    <Dropdown placeholder="end" fluid selection />
  </Container>
);

export default CompanySelect;

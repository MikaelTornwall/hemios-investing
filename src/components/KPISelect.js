import React from 'react';
import { Container, Header, Dropdown } from 'semantic-ui-react';

const KPISelect = visible => {
  return visible ? (
    <Container>
      <Dropdown placeholder="Select KPI 1" fluid selection />
      <Dropdown placeholder="Select KPI 2" fluid selection />
    </Container>
  ) : (
    ''
  );
};

export default KPISelect;

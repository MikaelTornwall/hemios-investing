import React, { Component } from 'react';
import { Accordion, Icon, Grid, GridColumn, GridRow } from 'semantic-ui-react';

import './ParameterAccordionContainer.scss';
import CompanySelect from '../components/CompanySelect';
import KPISelect from '../components/KPISelect';
import TimeIntervalSelect from '../components/TimeIntervalSelect';
import { parameterAccordion } from '../components/ParameterAccordion';

const CompanySelectAccordion = parameterAccordion(CompanySelect, 'Company');
const KPISelectAccordion = parameterAccordion(KPISelect, 'KPI');
const TimeIntervalSelectAccordion = parameterAccordion(
  TimeIntervalSelect,
  'Time interval'
);

export default class ParameterAccordionContainer extends Component {
  state = {};

  render() {
    return (
      <Grid columns={3} stackable>
        <GridRow>
          <GridColumn>
            <CompanySelectAccordion />
          </GridColumn>
          <GridColumn>
            <KPISelectAccordion />
          </GridColumn>
          <GridColumn>
            <TimeIntervalSelectAccordion />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

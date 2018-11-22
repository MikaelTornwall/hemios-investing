import React, { Component } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

import './ParameterAccordionContainer.scss';
import CompanySelect from './CompanySelect';
import KPISelect from './KPISelect';
import TimeIntervalSelect from './TimeIntervalSelect';
import { parameterAccordion } from './ParameterAccordion';
import { selectWithLabels } from './SelectWithLabels';

const CompanySelectAccordion = parameterAccordion(
  selectWithLabels(CompanySelect, 1),
  'Company'
);
const KPISelectAccordion = parameterAccordion(
  selectWithLabels(KPISelect, 2),
  'KPI'
);
const TimeIntervalSelectAccordion = parameterAccordion(
  TimeIntervalSelect,
  'Time interval'
);

export default class ParameterAccordionContainer extends Component {
  state = {
    companySelectVisible: true,
    KPISelectVisible: false,
    timeIntervalSelectVisible: false
  };

  showCompanySelect = show => {
    if (this.props.mobile) {
      this.setState({
        companySelectVisible: show,
        KPISelectVisible: false,
        timeIntervalSelectVisible: false
      });
    } else {
      this.setState({
        companySelectVisible: show
      });
    }
  };
  showKPISelect = show => {
    if (this.props.mobile) {
      this.setState({
        companySelectVisible: false,
        KPISelectVisible: show,
        timeIntervalSelectVisible: false
      });
    } else {
      this.setState({
        KPISelectVisible: show
      });
    }
  };
  showTimeIntervalSelect = show => {
    if (this.props.mobile) {
      this.setState({
        companySelectVisible: false,
        KPISelectVisible: false,
        timeIntervalSelectVisible: show
      });
    } else {
      this.setState({
        timeIntervalSelectVisible: show
      });
    }
  };

  render() {
    return (
      <Grid columns={1} stackable>
        <GridRow>
          <GridColumn>
            <CompanySelectAccordion
              visible={this.state.companySelectVisible}
              showAccordion={this.showCompanySelect}
              updateSelection={this.props.updateCompanies}
              dataProvider={this.props.dataProvider}
            />
          </GridColumn>
          <GridColumn>
            <KPISelectAccordion
              visible={this.state.KPISelectVisible}
              showAccordion={this.showKPISelect}
              updateSelection={this.props.updateKPIs}
              dataProvider={this.props.dataProvider}
            />
          </GridColumn>
          <GridColumn>
            <TimeIntervalSelectAccordion
              visible={this.state.timeIntervalSelectVisible}
              showAccordion={this.showTimeIntervalSelect}
              updateSelection={this.props.updateTimeInterval}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

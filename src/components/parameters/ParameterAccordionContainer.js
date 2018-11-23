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
  showCompanySelect = show => {
    if (this.props.mobile) {
      this.props.setVisibilities({
        companySelectVisible: show,
        KPISelectVisible: false,
        timeIntervalSelectVisible: false
      });
    } else {
      this.props.setVisibilities({
        companySelectVisible: show,
        KPISelectVisible: this.props.KPISelectVisible,
        timeIntervalSelectVisible: this.props.timeIntervalSelectVisible
      });
    }
  };
  showKPISelect = show => {
    if (this.props.mobile) {
      this.props.setVisibilities({
        companySelectVisible: false,
        KPISelectVisible: show,
        timeIntervalSelectVisible: false
      });
    } else {
      this.props.setVisibilities({
        companySelectVisible: this.props.companySelectVisible,
        KPISelectVisible: show,
        timeIntervalSelectVisible: this.props.timeIntervalSelectVisible
      });
    }
  };
  showTimeIntervalSelect = show => {
    if (this.props.mobile) {
      this.props.setVisibilities({
        companySelectVisible: false,
        KPISelectVisible: false,
        timeIntervalSelectVisible: show
      });
    } else {
      this.props.setVisibilities({
        companySelectVisible: this.props.companySelectVisible,
        KPISelectVisible: this.props.KPISelectVisible,
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
              visible={this.props.companySelectVisible}
              showAccordion={this.showCompanySelect}
              updateSelection={this.props.updateCompanies}
              dataProvider={this.props.dataProvider}
              stickyContext={this.props.stickyContext}
            />
          </GridColumn>
          <GridColumn>
            <KPISelectAccordion
              visible={this.props.KPISelectVisible}
              showAccordion={this.showKPISelect}
              updateSelection={this.props.updateKPIs}
              dataProvider={this.props.dataProvider}
              stickyContext={this.props.stickyContext}
            />
          </GridColumn>
          <GridColumn>
            <TimeIntervalSelectAccordion
              visible={this.props.timeIntervalSelectVisible}
              showAccordion={this.showTimeIntervalSelect}
              updateSelection={this.props.updateTimeInterval}
              stickyContext={this.props.stickyContext}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

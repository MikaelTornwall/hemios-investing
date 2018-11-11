import React, { Component } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

import './ParameterAccordionContainer.scss';
import CompanySelect from '../components/parameters/CompanySelect';
import KPISelect from '../components/parameters/KPISelect';
import TimeIntervalSelect from '../components/parameters/TimeIntervalSelect';
import { parameterAccordion } from '../components/parameters/ParameterAccordion';
import { selectWithLabels } from '../components/parameters/SelectWithLabels';

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
  constructor(props) {
    super(props);
    this.state = {
      companySelectVisible: true,
      KPISelectVisible: true,
      timeIntervalSelectVisible: true
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ mobile: window.innerWidth >= 768 });
  }

  showCompanySelect = show => {
    if (this.state.mobile) {
      this.showAll(show);
    } else {
      this.setState({
        companySelectVisible: show
      });
    }
  };
  showKPISelect = show => {
    if (this.state.mobile) {
      this.showAll(show);
    } else {
      this.setState({
        KPISelectVisible: show
      });
    }
  };
  showTimeIntervalSelect = show => {
    if (this.state.mobile) {
      this.showAll(show);
    } else {
      this.setState({
        timeIntervalSelectVisible: show
      });
    }
  };

  showAll = show => {
    this.setState({
      companySelectVisible: show,
      KPISelectVisible: show,
      timeIntervalSelectVisible: show
    });
  };

  render() {
    return (
      <Grid columns={3} stackable>
        <GridRow>
          <GridColumn>
            <CompanySelectAccordion
              visible={this.state.companySelectVisible}
              showAccordion={this.showCompanySelect}
              updateSelection={this.props.updateCompanies}
            />
          </GridColumn>
          <GridColumn>
            <KPISelectAccordion
              visible={this.state.KPISelectVisible}
              showAccordion={this.showKPISelect}
              updateSelection={this.props.updateKPIs}
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

import React, { Component } from 'react';
import { Accordion, Icon, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import { tabletBreakpointt } from '../semantic/src/themes/default/globals/site.variables';

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
            />
          </GridColumn>
          <GridColumn>
            <KPISelectAccordion
              visible={this.state.KPISelectVisible}
              showAccordion={this.showKPISelect}
            />
          </GridColumn>
          <GridColumn>
            <TimeIntervalSelectAccordion
              visible={this.state.timeIntervalSelectVisible}
              showAccordion={this.showTimeIntervalSelect}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

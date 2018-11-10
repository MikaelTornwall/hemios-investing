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
      companySelectHidden: false,
      KPISelectHidden: false,
      timeIntervalSelectHidden: false
    };
    // this.hideCompanySelect = this.hideCompanySelect.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ mobile: window.innerWidth >= 768 });
  }

  hideCompanySelect = hide => {
    if (this.state.mobile) {
      this.hideAll(hide);
    } else {
      this.setState({
        companySelectHidden: hide
      });
    }
  };
  hideKPISelect = hide => {
    if (this.state.mobile) {
      this.hideAll(hide);
    } else {
      this.setState({
        KPISelectHidden: hide
      });
    }
  };
  hideTimeIntervalSelect = hide => {
    if (this.state.mobile) {
      this.hideAll(hide);
    } else {
      this.setState({
        timeIntervalSelectHidden: hide
      });
    }
  };

  hideAll = hide => {
    this.setState({
      companySelectHidden: hide,
      KPISelectHidden: hide,
      timeIntervalSelectHidden: hide
    });
  };

  render() {
    return (
      <Grid columns={3} stackable>
        <GridRow>
          <GridColumn>
            <CompanySelectAccordion
              hidden={this.state.companySelectHidden}
              hideAccordion={this.hideCompanySelect}
            />
          </GridColumn>
          <GridColumn>
            <KPISelectAccordion
              hidden={this.state.KPISelectHidden}
              hideAccordion={this.hideKPISelect}
            />
          </GridColumn>
          <GridColumn>
            <TimeIntervalSelectAccordion
              hidden={this.state.timeIntervalSelectHidden}
              hideAccordion={this.hideTimeIntervalSelect}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

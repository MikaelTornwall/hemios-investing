import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';

export default class TimeIntervalSelect extends Component {
  startMonth = 1;
  startYear = 2015;
  endMonth = 12;
  endYear = 2016;
  startMonthOptions = [];
  startYearOptions = [];
  endMonthOptions = [];
  endYearOptions = [];

  componentWillMount() {
    _.range(1, 13).forEach(i => {
      const startMonth = {
        key: i,
        value: i,
        text: i.toString()
      };
      const endMonth = {
        key: i,
        value: i,
        text: i.toString()
      };
      this.startMonthOptions.push(startMonth);
      this.endMonthOptions.push(endMonth);
    });

    _.range(1990, 2020).forEach(i => {
      const startYear = {
        key: i,
        value: i,
        text: i.toString()
      };
      const endYear = {
        key: i,
        value: i,
        text: i.toString()
      };
      this.startYearOptions.push(startYear);
      this.endYearOptions.push(endYear);
    });
    this.updateSelection();
  }

  updateStartMonth = (e, { value }) => {
    this.startMonth = value;
    this.updateSelection();
  };
  updateStartYear = (e, { value }) => {
    this.startYear = value;
    this.updateSelection();
  };
  updateEndMonth = (e, { value }) => {
    this.endMonth = value;
    this.updateSelection();
  };
  updateEndYear = (e, { value }) => {
    this.endYear = value;
    this.updateSelection();
  };

  updateSelection = () => {
    this.props.updateSelection([
      this.startMonth,
      this.startYear,
      this.endMonth,
      this.endYear
    ]);
  };
  render() {
    return (
      <>
        {this.props.visible && (
          <Container>
            <Dropdown
              value={this.startMonth}
              onChange={this.updateStartMonth}
              placeholder="Month"
              compact
              selection
              options={this.startMonthOptions}
            />
            <Dropdown
              value={this.startYear}
              onChange={this.updateStartYear}
              placeholder="Year"
              compact
              selection
              options={this.startYearOptions}
            />
            {' - '}
            <Dropdown
              value={this.endMonth}
              onChange={this.updateEndMonth}
              placeholder="Month"
              compact
              selection
              options={this.endMonthOptions}
            />
            <Dropdown
              value={this.endYear}
              onChange={this.updateEndYear}
              placeholder="Year"
              compact
              selection
              options={this.endYearOptions}
            />
          </Container>
        )}
      </>
    );
  }
}

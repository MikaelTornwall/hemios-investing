import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';

export default class TimeIntervalSelect extends Component {
  state = {
    startMonth: 1,
    startYear: 2015,
    endMonth: 12,
    endYear: 2016,
    startMonthOptions: [],
    startYearOptions: [],
    endMonthOptions: [],
    endYearOptions: []
  };

  componentDidMount() {
    _.range(1, 13).forEach(i => {
      const month = {
        key: i,
        value: i,
        text: i.toString()
      };
      this.state.startMonthOptions.push(month);
      this.state.endMonthOptions.push(month);
    });

    _.range(1990, 2020).forEach(i => {
      const year = {
        key: i,
        value: i,
        text: i.toString()
      };
      this.state.startYearOptions.push(year);
      this.state.endYearOptions.push(year);
    });

    this.disableInvalidDateOptions();
  }

  disableInvalidDateOptions() {
    this.state.startYearOptions.forEach(
      year => (year.disabled = year > this.state.startYear)
    );
    this.state.endYearOptions.forEach(
      year => (year.disabled = year < this.state.startYear)
    );
  }

  updateStartMonth = (e, { value }) => {
    this.setState({ startMonth: value });
    this.updateSelection(this.state);
  };
  updateStartYear = (e, { value }) => {
    this.setState({ startYear: value });
    this.updateSelection(this.state);
  };
  updateEndMonth = (e, { value }) => {
    this.setState({ endMonth: value });
    this.updateSelection(this.state);
  };
  updateEndYear = (e, { value }) => {
    this.setState({ endYear: value });
    this.updateSelection(this.state);
  };

  updateSelection = () => {
    this.props.updateSelection(this.state);
  };
  render() {
    return (
      <>
        {this.props.visible && (
          <Container>
            <Dropdown
              value={this.state.startMonth}
              onChange={this.updateStartMonth}
              placeholder="Month"
              compact
              selection
              options={this.state.startMonthOptions}
            />
            <Dropdown
              value={this.state.startYear}
              onChange={this.updateStartYear}
              placeholder="Year"
              compact
              selection
              options={this.state.startYearOptions}
            />
            {' - '}
            <Dropdown
              value={this.state.endMonth}
              onChange={this.updateEndMonth}
              placeholder="Month"
              compact
              selection
              options={this.state.endMonthOptions}
            />
            <Dropdown
              value={this.state.endYear}
              onChange={this.updateEndYear}
              placeholder="Year"
              compact
              selection
              options={this.state.endYearOptions}
            />
          </Container>
        )}
      </>
    );
  }
}

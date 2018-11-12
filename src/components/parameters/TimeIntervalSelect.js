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
    var startMonthOptions = [];
    var endMonthOptions = [];
    var startYearOptions = [];
    var endYearOptions = [];

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
      startMonthOptions.push(startMonth);
      endMonthOptions.push(endMonth);
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
      startYearOptions.push(startYear);
      endYearOptions.push(endYear);
    });

    this.setState({
      startMonthOptions: startMonthOptions,
      endMonthOptions: endMonthOptions,
      startYearOptions: startYearOptions,
      endYearOptions: endYearOptions
    });
  }

  updateStartMonth = (e, { value }) => {
    this.setState({ startMonth: value });
    this.updateSelection();
  };
  updateStartYear = (e, { value }) => {
    this.setState({ startYear: value });
    this.updateSelection();
  };
  updateEndMonth = (e, { value }) => {
    this.setState({ endMonth: value });
    this.updateSelection();
  };
  updateEndYear = (e, { value }) => {
    this.setState({ endYear: value });
    this.updateSelection();
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

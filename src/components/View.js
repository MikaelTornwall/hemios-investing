import React, { Component } from 'react';
import { Item, Grid } from 'semantic-ui-react';

import GraphCard from './GraphCard';
import ParameterAccordionContainer from '../containers/ParameterAccordionContainer';

export default class View extends Component {
  state = {
    selectedCompanies: [],
    selectedKPIs: [],
    selectedTimeInterval: []
  };

  updateCompanies = selectedCompanies => {
    this.setState({
      selectedCompanies: selectedCompanies
    });
  };

  updateKPIs = selectedKPIs => {
    this.setState({
      selectedKPIs: selectedKPIs
    });
  };
  updateTimeInterval = selectedTimeInterval => {
    this.setState({
      selectedTimeInterval: selectedTimeInterval
    });
  };
  render() {
    return (
      <>
        <ParameterAccordionContainer
          updateCompanies={this.updateCompanies}
          updateKPIs={this.updateKPIs}
          updateTimeInterval={this.updateTimeInterval}
          {...this.props}
          tab={1}
        />
        <Grid columns={3}>
          {this.state.selectedKPIs.map(selectedKPI => (
            <Grid.Column>
              <GraphCard
                kpi={selectedKPI}
                companies={this.state.selectedCompanies}
                dataProvider={this.props.dataProvider}
              />
            </Grid.Column>
          ))}
        </Grid>
      </>
    );
  }
}

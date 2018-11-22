import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import GraphCard from './GraphCard';
import ParameterAccordionContainer from './parameters/ParameterAccordionContainer';

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
      <Grid stackable columns={2}>
        <Grid.Column className={'hemios-sidebar'}>
          <ParameterAccordionContainer
            updateCompanies={this.updateCompanies}
            updateKPIs={this.updateKPIs}
            updateTimeInterval={this.updateTimeInterval}
            {...this.props}
            tab={1}
          />
        </Grid.Column>
        <Grid.Column>
          <Grid columns={16}>
            {this.state.selectedKPIs.map(selectedKPI => (
              <Grid.Column key={selectedKPI}>
                <GraphCard
                  kpi={selectedKPI}
                  companies={this.state.selectedCompanies}
                  dataProvider={this.props.dataProvider}
                />
              </Grid.Column>
            ))}
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';

import GraphCard from './GraphCard';
import ParameterAccordionContainer from './parameters/ParameterAccordionContainer';

export default class View extends Component {
  state = {
    selectedCompanies: [],
    selectedKPIs: [],
    selectedTimeInterval: [],
    visibilities: {
      companySelectVisible: true,
      KPISelectVisible: false,
      timeIntervalSelectVisible: false
    }
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
  setVisibilities = visibilities => {
    this.setState({ visibilities: visibilities });
  };
  render() {
    return (
      <>
        <Container className={'hemios-sidebar'}>
          <ParameterAccordionContainer
            updateCompanies={this.updateCompanies}
            updateKPIs={this.updateKPIs}
            updateTimeInterval={this.updateTimeInterval}
            setVisibilities={this.setVisibilities}
            companySelectVisible={this.state.visibilities.companySelectVisible}
            KPISelectVisible={this.state.visibilities.KPISelectVisible}
            timeIntervalSelectVisible={
              this.state.visibilities.timeIntervalSelectVisible
            }
            {...this.props}
            tab={1}
          />
        </Container>
        <Card.Group className={'hemios-graphs'}>
          {this.state.selectedKPIs.map(selectedKPI => (
            <GraphCard
              kpi={selectedKPI}
              companies={this.state.selectedCompanies}
              dataProvider={this.props.dataProvider}
            />
          ))}
        </Card.Group>
      </>
    );
  }
}

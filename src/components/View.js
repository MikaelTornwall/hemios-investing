import React, { Component } from 'react';
import {} from 'semantic-ui-react';

import GraphCard from './GraphCard';
import ParameterAccordionContainer from '../containers/ParameterAccordionContainer';

export default class View extends Component {
  state = {
    selectedCompanies: [],
    selectedKPIs: [],
    selectedTimeInterval: [],
  };

  updateCompanies = selectedCompanies => {
    this.setState({
      selectedCompanies: selectedCompanies,
    });
  };

  updateKPIs = selectedKPIs => {
    this.setState({
      selectedKPIs: selectedKPIs,
    });
  };
  updateTimeInterval = selectedTimeInterval => {
    this.setState({
      selectedTimeInterval: selectedTimeInterval,
    });
  };
  render() {
    return (
      <>
        <ParameterAccordionContainer
          updateCompanies={this.updateCompanies}
          updateKPIs={this.updateKPIs}
          updateTimeInterval={this.updateTimeInterval}
          mobile={this.props.mobile}
          tab={1}
        />
        <GraphCard i="1" />
      </>
    );
  }
}

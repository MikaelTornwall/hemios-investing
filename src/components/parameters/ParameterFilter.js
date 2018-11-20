import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

export function parameterFilter(WrappedAccordionList, title) {
  class ParameterFilter extends Component {
    render() {
      return (
        <>
          {title}
          <Container>
            <WrappedAccordionList
              contentData={this.props.data}
              selectedItems={this.props.selectedItems}
              handleChange={this.props.handleChange}
            />
          </Container>
        </>
      );
    }
  }
  return ParameterFilter;
}

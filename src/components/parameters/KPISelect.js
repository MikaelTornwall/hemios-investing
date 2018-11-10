import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';

export default class KPISelect extends Component {
  componentDidMount() {
    this.props.populate([
      { key: 'a', value: 'A', text: 'KPI_A' },
      { key: 'b', value: 'B', text: 'KPI_B' },
      { key: 'c', value: 'C', text: 'KPI_C' },
      { key: 'd', value: 'D', text: 'KPI_D' }
    ]);
  }
  render() {
    return (
      <>
        {this.props.visible && (
          <Container>
            <Dropdown
              fluid
              search
              selection
              options={this.props.options}
              onChange={this.props.handleChange}
              placeholder={
                this.props.selectedItems.length === 0
                  ? 'Add KPI'
                  : 'Add another KPI'
              }
              value=""
            />
          </Container>
        )}
      </>
    );
  }
}

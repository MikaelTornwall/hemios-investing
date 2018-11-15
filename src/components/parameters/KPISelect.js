import React, { Component } from 'react';
import { Container, Dropdown, Button } from 'semantic-ui-react';

export default class KPISelect extends Component {
  componentDidMount() {
    this.props.populate(this.props.dataProvider.getAllKPIsList());
  }
  render() {
    return (
      <>
        <Container>
          <Dropdown
            fluid
            search
            selection
            selectOnBlur={false}
            options={this.props.options}
            onChange={this.props.handleChange}
            placeholder={
              this.props.selectedItems.length === 0
                ? 'Add KPI'
                : 'Add another KPI'
            }
            value=""
          />
          <Button>Hey!</Button>
        </Container>
      </>
    );
  }
}

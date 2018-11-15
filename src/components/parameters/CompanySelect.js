import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';

export default class CompanySelect extends Component {
  componentDidMount() {
    this.props.populate(this.props.dataProvider.getAllCompaniesList());
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
                ? 'Search for company'
                : 'Search for another company'
            }
            value=""
          />
        </Container>
      </>
    );
  }
}

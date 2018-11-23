import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import { parameterFilter } from './ParameterFilter';
import KPICategoriesList from './KPICategoriesList';

const KPIFilter = parameterFilter(KPICategoriesList, 'Filter by KPI Category');

export default class KPISelect extends Component {
  componentDidMount() {
    this.props.populate(this.props.dataProvider.getAllKPIsList());
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
              selectOnBlur={false}
              options={this.props.options}
              onChange={this.props.handleChange}
              placeholder={
                this.props.selectedItems.length === 0
                  ? 'Search for KPI'
                  : 'Search for another KPI'
              }
              value=""
            />
            <KPIFilter
              data={this.props.dataProvider}
              selectedItems={this.props.selectedItems}
              handleChange={this.props.handleChange}
            />
          </Container>
        )}
      </>
    );
  }
}

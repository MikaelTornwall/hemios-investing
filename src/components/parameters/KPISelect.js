import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import { parameterFilter } from './ParameterFilter';
import KPICategoriesList from './KPICategoriesList';
import KPIsData from '../../resources/kpis.json';

const KPIFilter = parameterFilter(KPICategoriesList, 'Filter by KPI Category');

const categoriesAndKPIs = KPIsData.kpiCategories;
//console.log(categoriesAndKPIs);
const balanceSheet = categoriesAndKPIs[0];
console.log(balanceSheet);

// let KPIType = categoriesAndKPIs.map( type => (
//   console.log(type)
// ));

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
                ? 'Search for KPI'
                : 'Search for another KPI'
            }
            value=""
          />
          <KPIFilter
            data={balanceSheet}
            selectedItems={this.props.selectedItems}
            handleChange={this.props.handleChange}
          />
        </Container>
      </>
    );
  }
}

import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import { parameterFilter } from './ParameterFilter';
import IndustryList from './IndustryList';

const CompanyFilter = parameterFilter(IndustryList, 'Filter by Industry');

// TODO: make api request to fetch real data
// const industriesNCompanies = {
//   Telcom: ['Elisa', 'DNA', 'Telia'],
//   Restaurant: ['Starbucks', 'McDonalds', 'Cheesecake Factory'],
//   Software: ['Apple', 'Google', 'Amazon'],
//   Clothing: ['Superdry', 'Lululemon', 'Tommy Hilfiger']
// };

// // Get all companies
// const companyLists = Object.values(industriesNCompanies);

// // Put them into a 1d list
// let companies = [];
// companyLists.map(
//   companiesList => (companies = companies.concat(companiesList))
// );

// let allCompanies = companies.map((company, index) => ({
//   key: index,
//   value: company,
//   text: company
// }));

export default class CompanySelect extends Component {
  componentDidMount() {
    this.props.populate(this.props.dataProvider.getAllCompaniesList());
    //this.props.populate(allCompanies);
    console.log(
      'All companies from dataProvider Key: ' +
        this.props.dataProvider.getAllCompaniesList()[0].key
    );
    console.log(
      'Value: ' + this.props.dataProvider.getAllCompaniesList()[0].value
    );
    console.log(
      'Text: ' + this.props.dataProvider.getAllCompaniesList()[0].text
    );
  }
  render() {
    return (
      <>
        {this.props.visible && (
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
            <CompanyFilter
              data={this.props.dataProvider}
              selectedItems={this.props.selectedItems}
              handleChange={this.props.handleChange}
            />
          </>
        )}
      </>
    );
  }
}

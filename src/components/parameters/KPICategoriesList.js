import React, { Component } from 'react';
import BalanceSheetList from './BalanceSheetList';

export default class KPICategoriesList extends Component {
  render() {
    const balanceSheetKPIs = this.props.contentData.getAllKpisWithCategory()[0];
    //const incomeStatementKpis = this.props.contentData.getAllKpisWithCategory()[1];

    return (
      <>
        <BalanceSheetList
          data={balanceSheetKPIs}
          selectedItems={this.props.selectedItems}
          handleChange={this.props.handleChange}
        />
      </>
    );
  }
}

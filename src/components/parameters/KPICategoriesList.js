import React, { Component } from 'react';
import BalanceSheetList from './BalanceSheetList';
import IncomeStatementList from './IncomeStatementList';

export default class KPICategoriesList extends Component {
  render() {
    const balanceSheetKPIs = this.props.contentData.getAllKpisWithCategory()[0];
    const incomeStatementKpis = this.props.contentData.getAllKpisWithCategory()[1];

    return (
      <>
        <div>
          <BalanceSheetList
            data={balanceSheetKPIs}
            selectedItems={this.props.selectedItems}
            handleChange={this.props.handleChange}
          />
          <IncomeStatementList
            data={incomeStatementKpis}
            selectedItems={this.props.selectedItems}
            handleChange={this.props.handleChange}
          />
        </div>
      </>
    );
  }
}

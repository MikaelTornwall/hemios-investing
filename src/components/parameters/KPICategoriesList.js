import React, { Component } from 'react';
import BalanceSheetList from './BalanceSheetList';

export default class KPICategoriesList extends Component {
  render() {
    return (
      <>
        <BalanceSheetList
          data={this.props.contentData}
          selectedItems={this.props.selectedItems}
          handleChange={this.props.handleChange}
        />
      </>
    );
  }
}

import AAL from './assets/AALfinancials.js';
import ABB from './assets/ABBVfinancials.js';
import AEE from './assets/AEEfinancials.js';
import COG from './assets/COGfinancials.js';
import EVHC from './assets/EVHCfinancials.js';

import _ from 'lodash';

export default class DataProvider {
  constructor(data) {
    //this.companies = data;
    this.companyData = [AAL, ABB, AEE, COG, EVHC];
  }

  getAllCompaniesList() {
    const companies = [];
    _.each(this.companyData, item => {
      companies.push({
        key: item.id,
        value: item.id,
        text: item.name
      });
    });
    return companies;
  }

  getCashFlowStatementHistory(companyId) {
    _.each(this.companyData, item => {
      if (item.id === companyId) {
        return item.values.cashflowStatementHistory;
      }
    });
  }
  getIncomeStatementHistory(companyId) {
    _.each(this.companyData, item => {
      if (item.id === companyId) {
        return item.values.incomeStatementHistory;
      }
    });
  }
  getBalanceSheetHistory(companyId) {
    _.each(this.companyData, item => {
      if (item.id === companyId) {
        return item.values.balanceSheetHistory;
      }
    });
  }

  // parse KPIs to x and y axis of the graphs

  getInvestmentsYearly(companyId) {
    const dates = [];
    const values = [];
    _.each(this.getCashFlowStatementhistory(companyId), item => {
      dates.push(item);
      values.push(item.investements);
    });
  }
}

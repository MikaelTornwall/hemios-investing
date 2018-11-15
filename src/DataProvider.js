import AAL from './assets/AALfinancials.js';
import ABB from './assets/ABBVfinancials.js';
import AEE from './assets/AEEfinancials.js';
import COG from './assets/COGfinancials.js';
import EVHC from './assets/EVHCfinancials.js';

import inv from './assets/investments.js';
import dep from './assets/depreciation.js';

import _ from 'lodash';

export default class DataProvider {
  constructor(data) {
    //this.companies = data;

    //this test data should be coming from the api eventually^^
    this.companyData = [AAL, ABB, AEE, COG, EVHC];
    this.KPIs = [inv, dep];
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
  getAllKPIsList() {
    const KPIs = [];
    _.each(this.KPIs, item => {
      KPIs.push({
        key: item.id,
        value: item.id,
        text: item.name
      });
    });
    return KPIs;
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
    return {
      x: dates.reverse(),
      y: values.reverse()
    };
  }

  getDepreciationYearly(companyId) {
    const dates = [];
    const values = [];
    _.each(this.getCashFlowStatementhistory(companyId), item => {
      dates.push(item);
      values.push(item.depreciation);
    });
    return {
      x: dates.reverse(),
      y: values.reverse()
    };
  }
}

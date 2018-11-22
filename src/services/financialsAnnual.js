import axios from 'axios';

const baseUrl = 'https://polar-springs-21656.herokuapp.com/api/financial_data';

const getAll = async () => {
  const req = await axios.get(baseUrl);
  const data = req.data;
  return data;
};

const getById = async id => {
  const req = await axios.get(`${baseUrl}/${id}`);
  const data = req.data;
  return data;
};

const getIncomeStatement = async id => {
  const req = await axios.get(`${baseUrl}/${id}/incomeStatement`);
  const data = req.data;
  return data;
};

const getCashflowStatement = async id => {
  const req = await axios.get(`${baseUrl}/${id}/cashflowStatement`);
  const data = req.data;
  return data;
};

const getBalanceSheet = async id => {
  const req = await axios.get(`${baseUrl}/${id}/balanceSheet`);
  const data = req.data;
  return data;
};

export default {
  getAll,
  getById,
  getCashflowStatement,
  getIncomeStatement,
  getBalanceSheet
};

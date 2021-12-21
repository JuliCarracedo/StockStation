import { loadData, loadDataFail, loadDataSuccess } from './stocks';

export const companies = ['AAPL', 'GOOG', 'FB', 'INTC', 'AMD', 'TSLA', 'MSFT', 'NVDA'];
const apikey = '50e320233c617cba50cefc08da4eee07';
const baseUrl = 'https://financialmodelingprep.com/api/v3/income-statement/';

const fetchCompany = async (baseUrl, company, apikey) => {
  const response = await fetch(`${baseUrl}${company}?limit=1&apikey=${apikey}`);
  const obj = await response.json();
  return obj[0];
};

const requestData = () => async (dispatch) => {
  const list = [];
  dispatch(loadData());

  try {
    list.push(await fetchCompany(baseUrl, companies[0], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  try {
    list.push(await fetchCompany(baseUrl, companies[1], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  try {
    list.push(await fetchCompany(baseUrl, companies[2], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  try {
    list.push(await fetchCompany(baseUrl, companies[3], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  try {
    list.push(await fetchCompany(baseUrl, companies[4], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  try {
    list.push(await fetchCompany(baseUrl, companies[5], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  try {
    list.push(await fetchCompany(baseUrl, companies[6], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  try {
    list.push(await fetchCompany(baseUrl, companies[7], apikey));
  } catch (e) { dispatch(loadDataFail()); }
  if (!list[-1]) { dispatch(loadDataFail()); }
  dispatch(loadDataSuccess(list));
};

export default requestData;

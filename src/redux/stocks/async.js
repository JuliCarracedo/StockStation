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

    list.push(await fetchCompany(baseUrl, companies[1], apikey));

    list.push(await fetchCompany(baseUrl, companies[2], apikey));

    list.push(await fetchCompany(baseUrl, companies[3], apikey));

    list.push(await fetchCompany(baseUrl, companies[4], apikey));

    list.push(await fetchCompany(baseUrl, companies[5], apikey));

    list.push(await fetchCompany(baseUrl, companies[6], apikey));

    list.push(await fetchCompany(baseUrl, companies[7], apikey));
  } catch (e) { dispatch(loadDataFail()); }

  dispatch(loadDataSuccess(list));
};
export default requestData;

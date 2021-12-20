import { loadData, loadDataFail, loadDataSuccess } from './stocks';

export const companies = ['AAPL', 'GOOG', 'FB', 'INTC', 'AMD', 'TSLA', 'MSFT', 'NVDA'];
const apikey = '50e320233c617cba50cefc08da4eee07';
const baseUrl = 'https://financialmodelingprep.com/api/v3/income-statement/';

const requestData = () => async (dispatch) => {
  const list = [];
  dispatch(loadData());
  for (let i = 0; i < companies.length; i += 1) {
    try {
      fetch(`${baseUrl}${companies[i]}?limit=1&apikey=${apikey}`)
        .then((response) => response.json())
        .then((obj) => list.push(obj[0]));
    } catch (e) { dispatch(loadDataFail()); }
  }
  dispatch(loadDataSuccess(list));
};
export default requestData;

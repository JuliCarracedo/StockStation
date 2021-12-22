/* eslint-disable no-unused-expressions */

import stocksReducer, { REQUEST_DATA, REQUEST_DATA_FAIL, REQUEST_DATA_SUCCESS } from '../redux/stocks/stocks';

describe('Stocks Reducer', () => {
  const list = [
    {
      date: '2020-12-31',
      symbol: 'A',
      revenue: 2,
      grossProfit: 2,
      ebitda: 3,
      netIncome: 4,
      eps: 5,
    },
    {
      date: '2020-12-31',
      symbol: 'B',
      revenue: 1,
      grossProfit: 2,
      ebitda: 4,
      netIncome: 4,
      eps: 2,
    },
  ];

  const initialState = {};

  it('exists', () => {
    expect(stocksReducer).toBeTruthy();
  });
  it('creates a loading variable into the state when receivig a REQUEST_DATA action', () => {
    expect(stocksReducer(initialState, { type: REQUEST_DATA }).loading).toBeTruthy;
  });
  it('makes the loading variable false when receivig a REQUEST_DATA_SUCCESS action', () => {
    expect(stocksReducer(initialState, { type: REQUEST_DATA_SUCCESS }).loading).toBeFalsy;
  });
  it('makes the loading variable false when receivig a REQUEST_DATA_FAIL action', () => {
    expect(stocksReducer(initialState, { type: REQUEST_DATA_FAIL }).loading).toBeFalsy;
  });

  it('makes the error variable true when receivig a REQUEST_DATA_FAIL action', () => {
    expect(stocksReducer(initialState, { type: REQUEST_DATA_FAIL }).e).toBeTruthy;
  });
  it('Fills the state list when receiving REQUEST_DATA_SUCCESS', () => {
    expect(stocksReducer(initialState,
      { type: REQUEST_DATA_SUCCESS, payload: list }).list).toStrictEqual(list);
  });
});

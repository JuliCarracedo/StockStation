import React from 'react';
import { Provider } from 'react-redux';
import renderer, { act } from 'react-test-renderer';
import { enableFetchMocks } from 'jest-fetch-mock';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/storeConfig';
import App from '../App';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';

enableFetchMocks();

describe('Application components', () => {
  beforeEach(() => {
    const list = [
      {
        date: '2020-12-31',
        symbol: 'A',
        revenue: 2,
        grossProfit: 2,
        ebitda: 3,
        netIncome: 4,
        eps: 5,
      }];
    fetch.mockResponse(JSON.stringify(list));
  });
  test('App component Snapshot', () => {
    let component;
    act(() => {
      component = renderer.create(<React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Navbar component Snapshot', () => {
    let component;
    act(() => {
      component = renderer.create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Home component Snapshot', () => {
    let component;
    act(() => {
      component = renderer.create(
        <Provider store={store}>
            <Home />
        </Provider>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

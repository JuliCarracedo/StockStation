import { filterList } from '../components/Home/Home';
import { chooseSubtext } from '../components/CompanyLink';

describe('filterList auxiliary function', () => {
  const list = [
    {
      date: '2020-12-31',
      symbol: 'AA',
      revenue: 2,
      grossProfit: 2,
      ebitda: 3,
      netIncome: 75,
      eps: 1,
    },
    {
      date: '2021-12-31',
      symbol: 'BB',
      revenue: 1,
      grossProfit: 2,
      ebitda: 4,
      netIncome: 4,
      eps: 2,
    },
    {
      date: '2020-11-31',
      symbol: 'AB',
      revenue: 3,
      grossProfit: 2,
      ebitda: 2,
      netIncome: 772,
      eps: 3,
    },
  ];

  it('exists', () => {
    expect(filterList).toBeTruthy();
  });
  it('orders ascendingly by income', () => {
    expect(filterList(list, 'income')[0].netIncome).toBe(772);
    expect(filterList(list, 'income')[1].netIncome).toBe(75);
    expect(filterList(list, 'income')[2].netIncome).toBe(4);
  });

  it('orders alphabetically by symbol', () => {
    expect(filterList(list, 'alphabetical')[0].symbol).toBe('AA');
    expect(filterList(list, 'alphabetical')[1].symbol).toBe('AB');
    expect(filterList(list, 'alphabetical')[2].symbol).toBe('BB');
  });

  it('orders ascendingly by eps', () => {
    expect(filterList(list, 'eps')[0].eps).toBe(3);
    expect(filterList(list, 'eps')[1].eps).toBe(2);
    expect(filterList(list, 'eps')[2].eps).toBe(1);
  });
  it('orders from newest to oldest by date', () => {
    expect(filterList(list, 'date')[0].date).toBe('2021-12-31');
    expect(filterList(list, 'date')[1].date).toBe('2020-12-31');
    expect(filterList(list, 'date')[2].date).toBe('2020-11-31');
  });
  it('Returns original list by default', () => {
    expect(filterList(list, 'default')).toStrictEqual(list);
  });
});

describe('ChooseSubtext aux function', () => {
  const example = {
    date: '2020-12-31',
    symbol: 'A',
    revenue: 2,
    grossProfit: 2,
    ebitda: 3,
    netIncome: 4,
    eps: 5,
  };

  it('exists', () => {
    expect(chooseSubtext).toBeTruthy();
  });
  it('shows date if date is asked for', () => {
    expect(chooseSubtext('date', example)).toBe('Date: 2020-12-31');
  });
  it('shows eps if eps is asked for', () => {
    expect(chooseSubtext('eps', example)).toBe('EPS: 5');
  });
  it('shows income if income is asked for', () => {
    expect(chooseSubtext('income', example)).toBe('Income: 4');
  });
  it('shows income by default', () => {
    expect(chooseSubtext('default', example)).toBe('Income: 4');
  });
  it('shows income if ordered alphabetically', () => {
    expect(chooseSubtext('default', example)).toBe('Income: 4');
  });
});

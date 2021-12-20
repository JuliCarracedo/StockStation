import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CompanyLink from '../CompanyLink';
import './Home.css';

const Home = () => {
  const { list } = useSelector((state) => state.stocks);
  const [currentFilter, setFilter] = useState('default');
  const filterFunction = (filter) => {
    switch (filter) {
      case 'income': return list.sort(
        (a, b) => Number.parseFloat(a.income) - Number.parseFloat(b.income),
      );
      case 'eps': return list.sort((a, b) => Number.parseFloat(a.eps) - Number.parseFloat(b.eps));
      default: return list;
    }
  };

  const sortedList = filterFunction(currentFilter);

  const handleFilter = (e) => {
    e.stopPropagation();
    setFilter(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="welcome-home">
        <h1>Stock Station</h1>
        <p>Check financial data for the biggest tech companies</p>
      </div>
      <select name="fitler" defaultValue="default" onChange={(e) => handleFilter(e)}>
        <option disabled value="default">Filter by</option>
        <option value="date">Date</option>
        <option value="income">Income</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="eps">EPS</option>
      </select>
      <div className="links">
        {sortedList.map(
          (company) => <CompanyLink key={company.symbol} title={company.symbol} />,
        )}
      </div>
    </div>
  );
};

export default Home;

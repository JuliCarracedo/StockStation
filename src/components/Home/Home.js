import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CompanyLink from '../CompanyLink';
import './Home.css';

export const filterList = (list, filter) => {
  switch (filter) {
    case 'income': return list.sort((a, b) => Number.parseFloat(a.income) - Number.parseFloat(b.income));
    case 'eps': return list.sort((a, b) => Number.parseFloat(a.eps) - Number.parseFloat(b.eps));
    case 'date': return list.sort((a, b) => new Date(a.date) - new Date(b.date));
    case 'alphabetical': return list.sort((a, b) => ((a.symbol < b.symbol) ? -1 : 1));
    default: return list;
  }
};

const Home = () => {
  const { list } = useSelector((state) => state.stocks);
  const [currentFilter, setFilter] = useState('default');
  const handleFilter = (e) => {
    e.stopPropagation();
    setFilter(e.target.value);
  };
  const filteredList = filterList(list, currentFilter);
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
        {filteredList.map(
          (company) => (
            <CompanyLink
              key={company.symbol}
              company={company}
              filter={currentFilter}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Home;

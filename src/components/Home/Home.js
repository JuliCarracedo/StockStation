import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CompanyLink from '../CompanyLink';
import './Home.css';

const Home = () => {
  const { list } = useSelector((state) => state.stocks);
  console.log(list, 'is the list');
  const [currentFilter, setFilter] = useState('default');
  const handleFilter = (e) => {
    e.stopPropagation();
    console.log(e.target.value, 'selected');
    setFilter(e.target.value);
  };
  console.log(currentFilter, 'is current filter');
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
        {list.map(
          (company) => <CompanyLink key={company.symbol} title={company.symbol} />,
        )}
      </div>
    </div>
  );
};

export default Home;

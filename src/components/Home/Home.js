import React from 'react';
import CompanyLink from '../CompanyLink';
import "./Home.css";

const Home = () => {
  const companies = ['AAPL', 'GGAL', 'FB', 'INTC', 'AMD', 'TSLA'];
  return (
    <div className="home-container">
      <div className="welcome-home">
        <h1>Stock Station</h1>
        <p>Check financial data for the biggest tech companies</p>
      </div>
        <select name="fitler" defaultValue="default">
          <option disabled value="default">Filter by</option>
          <option value="date">Date</option>
        </select>
      <div className="links">
        {companies.map((company) => <CompanyLink key={company} title={company} />)}
      </div>
    </div>
  );
};

export default Home;

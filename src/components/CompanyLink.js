import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const chooseSubtext = (filter, company) => {
  switch (filter) {
    case 'income': return `Income: ${company.netIncome}`;
    case 'alphabetical': return `Income: ${company.netIncome}`;
    case 'eps': return `EPS: ${company.eps}`;
    case 'date': return `Date: ${company.date}`;
    default: return `Income: ${company.netIncome}`;
  }
};

const CompanyLink = (props) => {
  const { company, filter } = props;
  const subtext = chooseSubtext(filter, company);
  return (
    <div className="company-link">
      <Link className="unstyled" to={`/${company.symbol}`}>
        <svg className="fill" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" /></svg>
        <h3 className="company-title">{company.symbol}</h3>
        <p className="company-subtext">{subtext}</p>
      </Link>
    </div>
  );
};

CompanyLink.propTypes = {
  company: PropTypes.objectOf(PropTypes.any).isRequired,
  filter: PropTypes.string.isRequired,
};

export default CompanyLink;

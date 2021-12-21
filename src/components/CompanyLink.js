import React from 'react';
import PropTypes from 'prop-types';

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
      <h3>{company.symbol}</h3>
      <p>{subtext}</p>
    </div>
  );
};

CompanyLink.propTypes = {
  company: PropTypes.objectOf(PropTypes.any).isRequired,
  filter: PropTypes.string.isRequired,
};

export default CompanyLink;

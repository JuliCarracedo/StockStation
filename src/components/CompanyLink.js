import React from 'react';
import PropTypes from 'prop-types';

const CompanyLink = (props) => {
  const { title } = props;
  return (<div className="company-link">{title}</div>);
};

CompanyLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompanyLink;

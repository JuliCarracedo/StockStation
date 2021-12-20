import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CompanyPage = (props) => {
  const { title } = props;
  const company = useSelector(
    (state) => state.stocks.list.filter((company) => company.symbol === title)[0],
  );

  return (
    <section>
      <div className="welcome-home">
        <h2>
          {`${title} income statement`}
        </h2>
      </div>
      <div>
        <p className="data-row">{`Data date: ${company.date}`}</p>
        <p className="data-row">{`Reported Currency: ${company.reportedCurrency}`}</p>
        <p className="data-row">{`Revenue: ${company.revenue}`}</p>
        <p className="data-row">{`Cost of Revenue: ${company.costOfRevenue}`}</p>
        <p className="data-row">{`Profit: ${company.grossProfit}`}</p>
        <p className="data-row">{`EPS: ${company.eps}`}</p>
        <p className="data-row">{`EBITDA: ${company.ebitda}`}</p>
      </div>
    </section>
  );
};

CompanyPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompanyPage;

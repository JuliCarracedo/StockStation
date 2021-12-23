import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ErrorPage from '../../pages/Error';
import Loading from '../../pages/Loading';
import './CompanyPage.css';

const CompanyPage = (props) => {
  const { title } = props;
  const company = useSelector(
    (state) => state.stocks.list.filter((company) => company.symbol === title)[0],
  );

  const { error, loading } = useSelector((state) => state.stocks);

  return (
    <section className="companyPage">

      {error && (<ErrorPage />)}
      {(loading && !error) && <Loading />}
      {(!loading && !error)
        && (
        <>
          <div className="welcome-page">
            <h2 className="welcome-page-title">
              {`${title} income statement`}
            </h2>
          </div>
          <div className="filter-container" />
          <div>
            <div className="data-row">
              <p>Data date:</p>
              {' '}
              <p>{company.date}</p>
            </div>
            <div className="data-row">
              <p>Reported Currency:</p>
              {' '}
              <p>{company.reportedCurrency}</p>
            </div>
            <div className="data-row">
              <p>Revenue:</p>
              {' '}
              <p>{company.revenue}</p>
            </div>
            <div className="data-row">
              <p>Cost of Revenue:</p>
              {' '}
              <p>{company.costOfRevenue}</p>
            </div>
            <div className="data-row">
              <p>Net Income</p>
              {' '}
              <p>{company.netIncome}</p>
            </div>
            <div className="data-row">
              <p>Profit:</p>
              {' '}
              <p>{company.grossProfit}</p>
            </div>
            <div className="data-row">
              <p>EPS:</p>
              {' '}
              <p>{company.eps}</p>
            </div>
            <div className="data-row">
              <p>EBITDA:</p>
              {' '}
              <p>{company.ebitda}</p>
            </div>
          </div>
        </>
        )}
    </section>
  );
};

CompanyPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CompanyPage;

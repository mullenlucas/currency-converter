import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/details.css';

const CurrencyDetails = () => {
  const location = useLocation();

  const curr = location?.state?.curr;

  return (
    <div className="currency-detail">
      <div className="curr-detail-card">
        <div className="curr-detail-header">
          <h2>{curr.name}</h2>
          <h2>{curr.acronym}</h2>
        </div>
        <img
          alt="currency-icon"
          className="currency-icon-detail"
          src={curr.icon}
          onError={(e) => { e.target.src = 'https://png.pngtree.com/element_our/sm/20180515/sm_5afb099d307d3.jpg'; }}
        />
        <div className="curr-detail-footer">
          <h3>
            {curr.acronym}
            {' '}
            per U$D unit:
          </h3>
          <h3>{curr.USDconversion}</h3>
        </div>

      </div>
      <div className="currency-info">
        <h4>Detailed Information</h4>
        <ul>
          <li className="li-typeA">
            <h4>Status</h4>
            <p>{curr.status}</p>
          </li>
          <li className="li-typeB">
            <h4>Country</h4>
            <p>
              {curr.countryName}
              (
              {curr.countryCode}
              )
            </p>
          </li>
          <li className="li-typeB">
            <h4>Available Since</h4>
            <p>{curr.availableFrom}</p>
          </li>
          <li className="li-typeA">
            <h4>Available Until</h4>
            <p>{curr.availableTill}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrencyDetails;

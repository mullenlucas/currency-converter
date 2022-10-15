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
          <img
            alt="currency-icon"
            className="currency-icon"
            src={curr.icon}
            onError={(e) => { e.target.src = 'https://png.pngtree.com/element_our/sm/20180515/sm_5afb099d307d3.jpg'; }}
          />
        </div>
        <div className="curr-detail-footer">
          <h3>
            U$D per
            {' '}
            {curr.acronym}
            {' '}
            unit:
          </h3>
          <h4>{curr.USDconversion}</h4>
        </div>

      </div>
      <div className="currency-info">
        <h4>Detailed Information</h4>
        <ul>
          <li>
            Status:
            {curr.status}
          </li>
          <li>
            Available Since:
            {curr.availableFrom}
          </li>
          <li>
            Available Until:
            {curr.availableTill}
          </li>
          <li>
            Country:
            {curr.countryName}
            (
            {curr.countryCode}
            )
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrencyDetails;

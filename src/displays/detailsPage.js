import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/details.css';
import worldlogo from '../media/world-icon.png';
import successlogo from '../media/success-icon.png';
import startlogo from '../media/start-icon.png';
import clocklogo from '../media/clock-icon.png';

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
        <h3>Detailed Information</h3>
        <div className="info-cards">
          <div className="detail-card typeA">
            <img src={successlogo} alt="success-logo" className="info-logo" />
            <div className="li">
              <h4>Status</h4>
              <p>{curr.status}</p>
            </div>
          </div>
          <div className="detail-card typeB">
            <img src={worldlogo} alt="world-logo" className="info-logo" />
            <div className="li">
              <h4>Country</h4>
              <p>
                {curr.countryName}
                (
                {curr.countryCode}
                )
              </p>
            </div>
          </div>
          <div className="detail-card typeB">
            <img src={startlogo} alt="start-logo" className="info-logo" />
            <div className="li">
              <h4>Available Since</h4>
              <p>{curr.availableFrom}</p>
            </div>
          </div>
          <div className="detail-card typeA">
            <img src={clocklogo} alt="clock-logo" className="info-logo" />
            <div className="li">
              <h4>Available Until</h4>
              <p>{curr.availableTill}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDetails;

import React from 'react';
import { PropTypes } from 'prop-types';
import '../../css/currency.css';

const CurrencyItem = ({ currency }) => {
  const {
    id, name, acronym, icon, USDconversion,
  } = currency;
  return (
    <>
      <div className="currency-card" id={id}>
        <div className="currency-card-header">
          <h3>{name}</h3>
          <img
            alt="currency-icon"
            className="currency-icon"
            src={icon}
            onError={(e) => { e.target.src = 'https://png.pngtree.com/element_our/sm/20180515/sm_5afb099d307d3.jpg'; }}
          />
        </div>
        <div className="currency-card-footer">
          <h2>{acronym}</h2>
          <h4>{USDconversion}</h4>
        </div>
      </div>
    </>
  );
};

CurrencyItem.propTypes = {
  currency: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    acronym: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    USDconversion: PropTypes.string.isRequired,
  }).isRequired,
};

export default CurrencyItem;

import React from 'react';
import { useLocation } from 'react-router-dom';

const CurrencyDetails = () => {
  const location = useLocation();

  const curr = location?.state?.curr;

  return (
    <div className="currency-detail">
      <h2>{curr.name}</h2>
      <h3>{curr.countryCode}</h3>
    </div>
  );
};

export default CurrencyDetails;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../../redux/currencySlice';
import CurrencyItem from './currencyItem';

const CurrenciesPage = () => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currencies);

  useEffect(() => {
    if (currencies.length === 0) {
      dispatch(getCurrencies());
    }
  });

  return (
    <>
      <div className="mission-container container">
        {currencies.map((curr) => (
          <CurrencyItem key={curr.id} currency={curr} />
        ))}
      </div>
    </>
  );
};

export default CurrenciesPage;

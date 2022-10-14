import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../redux/currencySlice';
import CurrencyItem from '../components/currencyItem';

const CurrenciesPage = () => {
  const currencies = useSelector((state) => state.currencies);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currencies.length === 0) {
      dispatch(getCurrencies());
    }
  });

  const filtered = currencies.filter(
    (currency) => !search || new RegExp(search, 'ig').test(currency.name),
  );

  return (
    <>
      <div id="search">
        <input
          type="search"
          value={search}
          placeholder="Search Coins"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {/* <i><img src={searchIcon} alt="" /></i> */}
      </div>
      <div className="container">
        {filtered.map((curr) => (
          <CurrencyItem key={curr.id} currency={curr} />
        ))}
      </div>
    </>
  );
};

export default CurrenciesPage;

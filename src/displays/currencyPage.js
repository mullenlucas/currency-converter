import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrencies } from '../redux/currencySlice';
import CurrencyItem from '../components/currencyItem';
import illus from '../media/worldbills.png';

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
      <section className="body-section">
        <div className="home-card">
          <div className="hc-txt">
            <h2>Real time currency converter to US dollars</h2>
            <h3>Discover and browse worldwide currencies and learn about them!</h3>
          </div>
          <div className="hc-img">
            <img src={illus} alt="illustration-exchange" className="illus-img" />
          </div>
        </div>
        <div id="search">
          <input
            type="search"
            value={search}
            placeholder="Search Currencies"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <i><img src={searchIcon} alt="" /></i> */}
        </div>
        <div className="cards-container">
          {filtered.map((curr) => (
            <Link
              to="details"
              state={{ curr }}
              className="single-currency"
              key={curr.id}
            >
              <CurrencyItem currency={curr} />
            </Link>

          ))}
        </div>
      </section>
    </>
  );
};

export default CurrenciesPage;

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import CurrencyDetails from '../displays/detailsPage';
import store from '../redux/store';

describe('Currency details test', () => {
  test('Currency details snapshot rendering...', () => {
    const history = createBrowserHistory();

    const curr = {
      id: 94,
      name: 'Argentine Peso',
      acronym: 'ARS',
      icon: 'https://currencyfreaks.com/photos/flags/ars.png',
      status: 'AVAILABLE',
      availableFrom: '1992, 1, 2',
      availableTill: '2022-10-14',
      countryCode: 'AR',
      countryName: 'Argentina',
      USDconversion: '151.25',
    };

    history.push('/details', { curr });
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <Routes>
              <Route path="/details" element={<CurrencyDetails />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import CurrenciesPage from '../displays/currencyPage';

describe('Home page rendering test', () => {
  test('Home page snapshot rendering...', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <CurrenciesPage />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});

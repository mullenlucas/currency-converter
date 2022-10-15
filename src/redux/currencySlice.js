import axios from 'axios';

const apiKey = '422061d241f24ab4869119d3071f61d2';

const currencyListUrl = 'https://api.currencyfreaks.com/supported-currencies';
const currencyConversionsUrl = 'https://api.currencyfreaks.com/latest';

const currencyInitialState = [];

// Actions
const FETCH_CURRENCIES = 'currency-converter/currencyContainer/FETCH_CURRENCIES';

export const fetchCurrencies = (curr) => ({
  type: FETCH_CURRENCIES,
  payload: curr,
});

export const getCurrencies = () => async (dispatch) => {
  const response = await axios.get(currencyListUrl);
  const objResponse = response.data;
  const filteredObjResp = objResponse.filter((v) => v.currencyName !== null && v.countryCode !== 'Crypto');

  const convertionResponse = await axios.get(currencyConversionsUrl, {
    params: {
      apikey: apiKey,
    },
  });
  const conversionObj = convertionResponse.data;

  const obj = filteredObjResp.map((e, i) => ({
    id: i,
    name: e.currencyName,
    acronym: e.currencyCode,
    icon: e.icon,
    status: e.status,
    availableFrom: e.available_in_historical_data_form,
    availableTill: e.available_in_historical_data_till,
    countryCode: e.countryCode,
    countryName: e.countryName,
    USDconversion: parseFloat(conversionObj.rates[e.currencyCode]).toFixed(2),
  }));

  dispatch(fetchCurrencies(obj));
};

const currencies = (state = currencyInitialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return action.payload;
    default:
      return state;
  }
};

export default currencies;

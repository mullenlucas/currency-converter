import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const apiKey = '422061d241f24ab4869119d3071f61d2';

export const currencySlice = createSlice({
  name: 'convert2USDnEUR',
  initialState: {
    from: '',
    conversions: [],
  },
  reducers: {
    convert(state, action) {
      const currVals = action.payload;
      state.conversions.push({
        currency: currVals.curr,
        toUsd: currVals.tousd,
        toEur: currVals.toeur,
      });
    },
  },
});

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
    USDconversion: conversionObj.rates[e.currencyCode],
  }));

  dispatch(fetchCurrencies(obj));
};

const currencies = (state = currencyInitialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return action.payload;
    // case JOIN_MISSION:
    //   return state.map((mission) => {
    //     if (mission.id === action.payload) {
    //       return { ...mission, joined: true };
    //     }
    //     return mission;
    //   });
    // case LEAVE_MISSION:
    //   return state.map((mission) => {
    //     if (mission.id === action.payload) {
    //       return { ...mission, joined: false };
    //     }
    //     return mission;
    //   });
    default:
      return state;
  }
};

export default currencies;

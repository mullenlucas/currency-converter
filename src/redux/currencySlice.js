import axios from 'axios';

// Amdoren vars
// const apiKey = 'ngR8EuTtpiBELHRWMiytHhgP2Nkw4z';

// const currencyListBaseUrl = 'https://www.amdoren.com/api/currency_list.php';

// const currencyListUrl = `${currencyListBaseUrl}?api_key=${apiKey}`;
const currencyListUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

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
  const obj = Object.keys(objResponse).map((k, i) => ({
    id: i,
    name: objResponse[k],
    acronym: k,
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

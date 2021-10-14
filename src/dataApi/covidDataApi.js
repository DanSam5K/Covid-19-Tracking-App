import { addCountry, setTotal } from '../redux/covidData/covidDatas';

const baseURL = 'https://api.covid19tracking.narrativa.com/api/';

export const fetchCovidData = async () => {
  const today = new Date().toISOString().split('T')[0];
  let response = await fetch(`${baseURL}/${today}`);
  response = await response.json();
  return response;
};

export const fetchData = async (dispatch) => {
  const data = await fetchCovidData();
  const today = new Date().toISOString().split('T')[0];
  dispatch(setTotal(data.total.today_confirmed));
  Object.keys(data.dates[today].countries).forEach((country) => {
    dispatch(addCountry(data.dates[today].countries[country]));
  });
};

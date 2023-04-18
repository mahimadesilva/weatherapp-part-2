import cityList from '../assets/cities.json';

export const environment = {
  production: true,
  WEATHER_API_KEY: 'e4e5a640da20f3a05005a29745eda68c',
  CITY_CODE_LIST: cityList.List.map((city) => city.CityCode),
  API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?id={%ID%}&appid={%APIKEY%}`,
  AUTH0_DOMAIN: 'dev-k32hvagg1s6lxk07.us.auth0.com',
  AUTH0_CLIENTID: 'CupIE0ojmTuMQpczUWY3cn84c2iQ3C0a',
  AUTH0_REDIRECT_URL: window.location.origin
};

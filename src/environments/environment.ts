import cityList from '../assets/cities.json';
import auth0_config from '../../auth-config.json';

export const environment = {
  production: false,
  WEATHER_API_KEY: 'e4e5a640da20f3a05005a29745eda68c',
  CITY_CODE_LIST: cityList.List.map((city) => city.CityCode),
  API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?id={%ID%}&appid={%APIKEY%}`,
  AUTH0_DOMAIN: auth0_config.domain,
  AUTH0_CLIENTID: auth0_config.client_id,
  AUTH0_REDIRECT_URL: window.location.origin,
};

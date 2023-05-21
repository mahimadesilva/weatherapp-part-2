import cityList from '../assets/cities.json';
import auth0_config from '../../auth-config.json';
import weather_api_config from '../../weather-api-config.json';

export const environment = {
  production: false,
  WEATHER_API_KEY: weather_api_config.key,
  CITY_CODE_LIST: cityList.List.map((city) => city.CityCode),
  API_ENDPOINT: weather_api_config.endpoint,
  AUTH0_DOMAIN: auth0_config.domain,
  AUTH0_CLIENTID: auth0_config.client_id,
  AUTH0_REDIRECT_URL: window.location.origin,
};

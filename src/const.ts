import { TCity } from './types/offer';

const Settings = {
  PlacesToStayCount: 312
} as const;

const CITIES: TCity[] = [
  {
    id: 'paris',
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12,
    },
  },
  {
    id: 'cologne',
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12,
    },
  },
  {
    id: 'brussels',
    name: 'Brussels',
    location: {
      latitude: 50.8465573,
      longitude: 4.351697,
      zoom: 12,
    },
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    id: 'hamburg',
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 12,
    },
  },
  {
    id: 'dusseldorf',
    name: 'Dusseldorf',
    location: {
      latitude: 51.2254018,
      longitude: 6.7763137,
      zoom: 12,
    },
  },
];

export type CityName = typeof CITIES[number]['name'];

const DEFAULT_CITY = CITIES[0];

const RATING_WIDTH_STEP = 20;

const RATINGS = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
}

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const MapSetting = {
  Layer:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const enum RequestStatus { Idle, Loading, Success, Failed}

export const Endpoint = {
  Comments: '/comments',
  Favorite: 'favorite',
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers'
};


export {
  Settings, CITIES, AppRoute, AuthorizationStatus,
  RATING_WIDTH_STEP, RATINGS, URL_MARKER_CURRENT, URL_MARKER_DEFAULT, DEFAULT_CITY, MapSetting,
};


import { TCity } from './types/offer';

const Settings = {
  PlacesToStayCount: 312
} as const;

const CITIES: TCity[] = [
  {
    name: 'Paris',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
];

const DEFAULT_CITY = CITIES[3];
const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
const RATING_WIDTH_STEP = 20;

const RATINGS = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'good'},
  {value: 3, label: 'not bad'},
  {value: 2, label: 'badly'},
  {value: 1, label: 'terribly'},
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth ='Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
}

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_ACTIVE =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export {Settings, CITIES, PLACES_OPTIONS, AppRoute, AuthorizationStatus, RATING_WIDTH_STEP, RATINGS, URL_MARKER_ACTIVE, URL_MARKER_DEFAULT, DEFAULT_CITY};


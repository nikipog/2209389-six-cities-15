import { TCity } from './types/offer';

const Settings = {
  PlacesToStayCount: 312
} as const;

const CITIES: TCity[] = [
  {
    id: 'paris',
    name: 'Paris',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    id: 'cologne',
    name: 'Cologne',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    id: 'brussels',
    name: 'Brussels',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
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
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
  {
    id: 'dusseldorf',
    name: 'Dusseldorf',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 12,
    },
  },
];

export type CityName = typeof CITIES[number]['name'];

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


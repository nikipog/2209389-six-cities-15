const Settings = {
  PlacesToStayCount: 312
} as const;

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
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


export {Settings, CITIES, PLACES_OPTIONS, AppRoute, AuthorizationStatus, RATING_WIDTH_STEP, RATINGS};


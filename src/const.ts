const Settings = {
  PlacesToStayCount: 312
} as const;

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
const RATING_WIDTH_STEP = 20;

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


export {Settings, CITIES, PLACES_OPTIONS, AppRoute, AuthorizationStatus, RATING_WIDTH_STEP };


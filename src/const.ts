const Settings = {
  PlacesToStayCount: 312
} as const;

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const FACILITIES_INSIDE_PLACE = [
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cable TV',
  'Fridge',
  'Wi-Fi',
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}


export {Settings, CITIES, PLACES_OPTIONS, FACILITIES_INSIDE_PLACE, AppRoute };


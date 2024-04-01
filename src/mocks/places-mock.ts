import { TOffer } from '../types/offer';

const placesMock: TOffer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://i.pravatar.cc/128',
      isPro: true
    },
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'
    ],
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 200,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.867938097468,
      longitude: 2.3396103969726623,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    bedrooms: 3,
    goods: [
      'Heating', 'Kitchen'
    ],
    host: {
      name: 'Hans Zimmer',
      avatarUrl: 'https://i.pravatar.cc/128',
      isPro: false
    },
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'
    ],
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 300,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    goods: [
      'Wi-Fi', 'Cable TV', 'Fridge'
    ],
    host: {
      name: 'Oliver Kann',
      avatarUrl: 'https://i.pravatar.cc/128',
      isPro: false
    },
    images: [
      'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'
    ],
    maxAdults: 1,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Canal View Prinsengracht',
    type: 'Room',
    price: 400,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating', 'Wi-Fi', 'Cable TV', 'Fridge'
    ],
    host: {
      name: 'Arnold Swahrnzedner',
      avatarUrl: 'https://i.pravatar.cc/128',
      isPro: true
    },
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'
    ],
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '584b2327-ad2b-478b-9bca-27fb0867ca65',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'house',
    price: 449,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    goods: [
      'Air conditioning',
      'Washer',
      'Baby seat'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3,
    bedrooms: 3,
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '643c659f-681a-4623-8b60-471dd6cca2e8',
    title: 'House in countryside',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'house',
    price: 523,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    location: {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    goods: [
      'Washing machine',
      'Breakfast',
      'Baby seat',
      'Kitchen',
      'Cable TV',
      'Washer',
      'Coffee machine',
      'Heating',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Dishwasher',
      'Air conditioning',
      'Towels'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.4,
    bedrooms: 5,
    maxAdults: 7,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '6b2d9c92-cb8d-4b65-84bb-08a527570619',
    title: 'The Pondhouse - A Magical Place',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'hotel',
    price: 341,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    location: {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    goods: [
      'Fridge',
      'Washing machine',
      'Washer',
      'Baby seat',
      'Kitchen',
      'Coffee machine',
      'Air conditioning',
      'Towels',
      'Laptop friendly workspace',
      'Heating',
      'Breakfast'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.4,
    bedrooms: 4,
    maxAdults: 9,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: 'bc241124-4dbe-445b-8511-a35ac300c772',
    title: 'Perfectly located Castro',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'apartment',
    price: 262,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    location: {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    goods: [
      'Wi-Fi',
      'Fridge',
      'Dishwasher',
      'Coffee machine',
      'Baby seat',
      'Towels',
      'Washing machine',
      'Air conditioning',
      'Heating',
      'Washer'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.8,
    bedrooms: 1,
    maxAdults: 7,
    previewImage: 'img/apartment-03.jpg'
  }
];

export default placesMock;

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
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
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
      latitude: 48.87961000000001,
      longitude: 4.673877537499948,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
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
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
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
      name: 'Boguchar',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 2
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 2
    },
    isFavorite: true,
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
];

export default placesMock;

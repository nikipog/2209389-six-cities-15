import placesMock from '../../mocks/places-mock';
import { TOffer } from '../../types/offer';

const MAX_NEAR_OFFERS = 3;

const getNearOffers = (offer: TOffer) : TOffer[] => {
  const nearOffers: TOffer[] = [];

  for (let i = 0; i < placesMock.length; i++) {
    if (placesMock[i].id !== offer.id && placesMock[i].city.name === offer.city.name) {
      nearOffers.push(placesMock[i]);
    }
    if (placesMock.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }
  return nearOffers;
};

export default getNearOffers;


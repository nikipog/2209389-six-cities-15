import { TOffer } from '../../types/offer';
import FavoritesItem from '../favorites-item/favorites-item';


type CityGroupType = {
  [key: string]: TOffer[];
}

function groupOffersByCity(items: TOffer[]): CityGroupType {

  const groupedItems = items.reduce((accumulator: CityGroupType, item) => {
    const cityName = item.city.name;

    if (!accumulator[cityName]) {
      accumulator[cityName] = [];
    }

    accumulator[cityName].push(item);

    return accumulator;
  }, {});

  return groupedItems;
}

type FavoritesListProps = {
  placesMock: TOffer[];
}
function FavoritesList({placesMock}: FavoritesListProps): JSX.Element {
  const offersGroupedByCity = groupOffersByCity(placesMock);
  return (
    <ul className="favorites__list">
      {Object.keys(offersGroupedByCity).map((city) => <FavoritesItem key={city} city={city} placesMock={offersGroupedByCity[city]}/>)}
    </ul>
  );
}

export default FavoritesList;

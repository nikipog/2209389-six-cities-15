import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offer';
import { AppRoute } from '../../const';
import CitiesPlacesList from '../cities-places-list/cities-places-list';


type FavoritesItemProps = {
  placesMock: TOffer[];
  city: string;
}

function FavoritesItem({placesMock, city }: FavoritesItemProps): JSX.Element | null {
  // Проверяем, не является ли пустым массивом
  if (placesMock.length === 0) {
    return null;
  }
  // Проверяем, есть ли хотя бы один объект с полем isFavorite равным true
  const hasFavoritePlace = placesMock.some((place) => place.isFavorite);

  // Если нет объектов с isFavorite равным true, возвращаем null
  if (!hasFavoritePlace) {
    return null;
  }

  // Иначе отрисовываем компонент с отмеченными избранными местами
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Main}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <CitiesPlacesList
          placesMock={placesMock}
        />
      </div>
    </li>
  );
}

export default FavoritesItem;

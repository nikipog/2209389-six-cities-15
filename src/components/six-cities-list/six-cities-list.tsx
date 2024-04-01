import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { TCity } from '../../types/offer';

type SixCitiesListProps = {
  city: TCity;
  isActive: string;

}

function SixCitiesList({ city, isActive }: SixCitiesListProps): JSX.Element {

  return (
    <li className="locations__item">
      <NavLink
        to={`/${city.id}`}
        className={({ isActive : linkIsActive }) =>
          classNames('locations__item-link tabs__item', {
            'tabs__item--active': isActive || linkIsActive
          })}
      >
        {city.name}
      </NavLink>
    </li>
  );
}

export default SixCitiesList;


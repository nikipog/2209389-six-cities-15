import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import { TCity } from '../../types/offer';

type SixCitiesListProps = {
  city: TCity;
  isActive: string;

}

const SixCitiesList = memo(({ city, isActive }: SixCitiesListProps): JSX.Element => (
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
));

SixCitiesList.displayName = 'SixCitiesList';

export default SixCitiesList;


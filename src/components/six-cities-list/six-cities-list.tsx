import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type SixCitiesListProps = {
  city: string;
  isActive: string;

}

function SixCitiesList ({city, isActive} : SixCitiesListProps) : JSX.Element {

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive}`}
        to={AppRoute.Main}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default SixCitiesList;


import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function SixCitiesList ({city} : {city : string}) : JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item"
        to={AppRoute.Main}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default SixCitiesList;


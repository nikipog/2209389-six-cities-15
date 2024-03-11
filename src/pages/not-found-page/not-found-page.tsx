import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage () : JSX.Element {
  return (

    <div>
      <Helmet>
        <title>6 Cities. Please, login</title>
      </Helmet>
     404 Not Found
      <nav>
        <Link to={AppRoute.Login}>Click to login</Link>
      </nav>
    </div>
  );

}

export default NotFoundPage;


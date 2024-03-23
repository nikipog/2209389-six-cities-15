import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offer';
import { AppRoute, RATING_WIDTH_STEP } from '../../const';


type FavoritesItemProps = {
  placesMock: TOffer[];
  city: string;
}

function FavoritesItem({placesMock, city }: FavoritesItemProps): JSX.Element {
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

        {placesMock.map((place) => (
          <article key={place.id} className="favorites__card place-card">
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={`/offer/${place.id}`}>
                <img className="place-card__image" src={place.previewImage} width="150" height="110" alt="Place image" />
              </Link>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{place.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: `${place.rating * RATING_WIDTH_STEP}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`/offer/${place.id}`}>{place.title}</Link>
              </h2>
              <p className="place-card__type">{place.type}</p>
            </div>
          </article>))}

      </div>
    </li>
  );
}

export default FavoritesItem;

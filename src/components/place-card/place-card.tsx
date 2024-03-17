import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TOffer } from '../../types/offer';
import { RATING_WIDTH_STEP } from '../../const';

type PlaceCardProps = {
  className: string;
  place: TOffer;
  handleHover: (offer? : TOffer) => void;
}

function PlaceCard({className = 'cities__card', place, handleHover} : PlaceCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type} = place;

  const handleMouseOn = () => {
    handleHover(place);
  };

  const handleMouseOff = () => {
    handleHover();
  };
  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link
          to={AppRoute.Offer}
        >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * RATING_WIDTH_STEP}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={AppRoute.Offer}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;


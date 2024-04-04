import { Link, generatePath } from 'react-router-dom';
import { MouseEvent } from 'react';
import { ServerOffer } from '../../types/offer';
import { AppRoute, RATING_WIDTH_STEP } from '../../const';

// type PlaceCardProps = TOffer & Pick<ComponentProps<'article'>, 'onMouseEnter' | 'onMouseLeave'> & {
//   className? : string;
// };
type PlaceCardProps = {
  place: ServerOffer;
  onMouseEnter?: (evt: MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (evt: MouseEvent<HTMLElement>) => void;
  className?: string;
};


function PlaceCard({place, className = 'cities', onMouseEnter, onMouseLeave } : PlaceCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, rating, title, type, isFavorite = false} = place;
  const url = generatePath(AppRoute.Offer, { id });


  return (
    <article
      className={`${className}__card place-card`}
      data-id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={url}
        >
          <img className="place-card__image" src={previewImage} width='260' height='200' alt="Place image" />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
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
            to={url}
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


import { Link } from 'react-router-dom';
import { ServerOffer } from '../../types/offer';
import { RATING_WIDTH_STEP } from '../../const';
import { FavoriteButton } from '../favorites-button/favorites-button';


type FavoritesItemProps = {
  offer: ServerOffer;
}

function FavoritesItem({ offer }: FavoritesItemProps): JSX.Element {
  return (

    <article key={offer.id} className="favorites__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            offerId={offer.id}
            bemBlock="place-card"
            width={18} // Обычные размеры для карточки в избранном
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * RATING_WIDTH_STEP}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesItem;

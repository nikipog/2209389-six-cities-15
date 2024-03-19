import { Helmet } from 'react-helmet-async';
import PlaceGalleryContainer from '../../components/place-gallery-container/place-gallery-container';
import PlaceImage from '../../components/place-image/place-image';
import FacilitiesInsidePlace from '../../components/facilities-inside-place/facilities-inside-place';
import ReviewsList from '../../components/review-list/reviews-list';

import NearPlacesList from '../../components/near-places-list/near-places-list';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
import { AuthorizationStatus, RATING_WIDTH_STEP } from '../../const';
import { TOffer } from '../../types/offer';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { TReviewType } from '../../types/reviews';
import ReviewForm from '../../components/review-form/review-form';

const MIN_BEDROOMS_COUNT = 1;
const MIN_ADULTS_COUNT = 1;

type OfferPageProps = {
  placesMock: TOffer[];
  reviews: TReviewType[];
}

function OfferPage({placesMock, reviews} : OfferPageProps) : JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const { id } = useParams<{ id: string }>();
  const currentPlace: TOffer | undefined = placesMock.find((place: TOffer) => place.id === id);
  if (typeof currentPlace === 'undefined') {
    return <NotFoundPage/>;
  }
  const {title, isPremium, isFavorite, rating, type, price, images, bedrooms, maxAdults, goods, host, description } = currentPlace;


  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 Cities. Offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <PlaceGalleryContainer>
            {images.map((imageSrc) => (
              <PlaceImage imageSrc={imageSrc} key={crypto.randomUUID()} />
            ))}
          </PlaceGalleryContainer>

        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>)}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button
                className={`offer__bookmark-button  ${isFavorite && 'offer__bookmark-button--active'} button`}
                type="button"
              >
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${Math.round(rating) * RATING_WIDTH_STEP}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{type}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms}
                {bedrooms > MIN_BEDROOMS_COUNT ? ' bedrooms' : ' bedroom'}
              </li>
              <li className="offer__feature offer__feature--adults">
              Max {maxAdults}
                {maxAdults > MIN_ADULTS_COUNT ? ' adults' : ' adult'}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What`s inside</h2>

              <FacilitiesInsidePlace goods={goods} />
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img
                    className="offer__avatar user__avatar"
                    src={host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{host.name}</span>
                <span className="offer__user-status">{host.isPro ? 'Pro' : ''}</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
                <p className="offer__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList reviews={reviews}/>
              {
                authorizationStatus === AuthorizationStatus.Auth && <ReviewForm/>
              }
            </section>
          </div>
        </div>
        <section className="offer__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
          Other places in the neighborhood
          </h2>
          <NearPlacesList/>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;



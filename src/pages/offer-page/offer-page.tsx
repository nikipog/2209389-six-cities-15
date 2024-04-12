import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import PlaceGalleryContainer from '../../components/place-gallery-container/place-gallery-container';
import PlaceImage from '../../components/place-image/place-image';
import FacilitiesInsidePlace from '../../components/facilities-inside-place/facilities-inside-place';
import ReviewsList from '../../components/review-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import CitiesPlacesList from '../../components/cities-places-list/cities-places-list';
import { FavoriteButton } from '../../components/favorites-button/favorites-button';
import { reviewActions, reviewSelector } from '../../store/slices/reviews';
import { offerActions, offerSelector } from '../../store/slices/offer';
import { useAppSelector } from '../../hooks/store';
import { RATING_WIDTH_STEP, RequestStatus } from '../../const';
import { useAuth } from '../../hooks/user-authorization';
import type { AppDispatch } from '../../types/store';

const MIN_BEDROOMS_COUNT = 1;
const MIN_ADULTS_COUNT = 1;


function OfferPage(): JSX.Element {
  // получение информации об оффере
  const offerPage = useAppSelector(offerSelector.offer);
  const status = useAppSelector(offerSelector.offerStatus);
  const nearbyOffers = useAppSelector(offerSelector.nearbyOffers);
  const reviews = useAppSelector(reviewSelector.reviews);
  const dispatch = useDispatch<AppDispatch>();
  // из УРЛа достаем айдишник и с его помощью отправляем запрос на сервер
  const { id } = useParams<{ id: string }>();

  const authorizationStatus = useAuth();

  useEffect(() => {
    //promise all - для одновременной отработки промисов
    Promise.all([
      dispatch(offerActions.fetchOffer(id as string)),
      dispatch(offerActions.fetchNearBy(id as string)),
      dispatch(reviewActions.fetchComments(id as string))]);
  },
  //в зависимостях сами методы и идентификатор полученный из useParams
  [dispatch, id]
  );

  if (status === RequestStatus.Loading) {
    return <div>Loading ...</div>;
  }
  // в случае если fail или ничего не найдено:
  //(запрос детального оффера useAppSelector(offerSelector.offer вернул null)
  if (status === RequestStatus.Failed || !offerPage) {
    return <NotFoundPage />;
  }


  const { title, isPremium, rating, type, price, images, bedrooms, maxAdults, goods, host, description, id: offerId } = offerPage;

  const nearbyCards = nearbyOffers.slice(0, 3);
  const nearOffersPlusCurrent = [offerPage, ...nearbyCards];

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
              <FavoriteButton
                offerId={offerId}
                bemBlock="offer"
                width={31} // Большие размеры для страницы оффера
              />
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
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList reviews={reviews} />
              {
                authorizationStatus && <ReviewForm offerId={offerId} />
              }
            </section>
          </div>
        </div>
        <Map
          offers={nearOffersPlusCurrent}
          city={offerPage.city.name}
          place='offer'
          activeOfferId={offerPage.id}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighborhood
          </h2>
          <CitiesPlacesList
            className='near-places__list places__list'
            currentOffers={nearbyCards}
          />
        </section>
      </div>
    </main>
  );
}

export default OfferPage;



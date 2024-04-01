import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';
import Map from '../../components/map/map';
import CitiesPlacesList from '../../components/cities-places-list/cities-places-list';
import PlacesCounter from '../../components/places-counter/places-counter';
import SixCitiesList from '../../components/six-cities-list/six-cities-list';
import CardListEmpty from '../../components/card-list-empty/card-list-empty';
import { SortOption } from '../../components/sort';
import Sort from '../../components/sort/sort';
import { CityName, CITIES } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers';
import { TOffer } from '../../types/offer';


type MainPageProps = {
  city: CityName;
};

function MainPage({ city }: MainPageProps): JSX.Element {

  const offers = useAppSelector(offersSelectors.offers);

  //можно использовать вместе с useMemo и в favorites
  const offersByCity = Object.groupBy(offers, (offer) => offer.city.name);

  const currentOffers = offersByCity[city] ?? [];


  const isEmpty = currentOffers.length === 0;
  const isActive = (item: string) => item === city ? 'tabs__item--active' : '';

  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  let sortedOffers = currentOffers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = currentOffers.toSorted((a: TOffer, b: TOffer) => a.price - b.price);
  }
  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = currentOffers.toSorted((a: TOffer, b: TOffer) => b.price - a.price);
  }
  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = currentOffers.toSorted((a: TOffer, b: TOffer) => b.rating - a.rating);
  }

  return (
    <main className={classNames('page__main', ' ', {
      'page__main--index-empty': isEmpty,
    })}
    >
      <Helmet>
        <title>6 Cities. Main</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((item) => <SixCitiesList city={item} isActive={isActive(item.name)} key={item.name} />)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className={classNames('container', 'cities__places-container', { 'cities__places-container--empty': isEmpty })}>
          {isEmpty ? <CardListEmpty city={city} /> : (
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesCounter
                  placesToStay={currentOffers}
                  currentCity={city}
                />
                <Sort
                  current={activeSort}
                  setter={setActiveSort}
                />
                <CitiesPlacesList
                  currentOffers={sortedOffers}
                  className='cities__places-list places__list tabs__content'
                />
              </section>
              <div className="cities__right-section">
                <Map
                  city={city}
                  offers={currentOffers}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default MainPage;

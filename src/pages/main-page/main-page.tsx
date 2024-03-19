import { Helmet } from 'react-helmet-async';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import CitiesPlacesList from '../../components/cities-places-list/cities-places-list';
import PlacesCounter from '../../components/places-counter/places-counter';
import SixCitiesList from '../../components/six-cities-list/six-cities-list';
import PlacesOptions from '../../components/places-options/places-options';
import { CITIES, PLACES_OPTIONS } from '../../const';

const PLACE_CARDS_COUNT = 5;

type MainPageProps = {
  placesToStay: number;
}

function MainPage ({placesToStay}: MainPageProps) : JSX.Element {
  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 Cities. Main</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => <SixCitiesList city = {city} key = {city}/>)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesCounter placesToStay = {placesToStay}/>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">

                {PLACES_OPTIONS.map((option) => <PlacesOptions option = {option} key = {option} />)}
              </ul>
            </form>
            <CitiesPlacesList>
              {Array.from({ length: PLACE_CARDS_COUNT }).map(() => (
                <PlaceCard key={crypto.randomUUID()} className='cities__card' />
              ))}
            </CitiesPlacesList>
          </section>
          <Map/>

        </div>
      </div>
    </main>
  );
}

export default MainPage;

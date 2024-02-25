import PlaceCardComponent from '../../components/place-card-component/place-card-component';
import HeaderComponent from '../../components/header-component/header-component';
import MapComponent from '../../components/map-component/map-component';
import CitiesPlacesListComponent from '../../components/cities-places-list-component/cities-places-list-component';
import PlacesCounterComponent from '../../components/places-counter-component/places-counter-component';
import SixCitiesListComponent from '../../components/six-cities-list-component/six-cities-list-component';
import PlacesOptionsComponent from '../../components/places-options-component/places-options-component';
import { CITIES, PLACES_OPTIONS } from '../../const';

const PLACE_CARDS_COUNT = 5;

type MainPageProps = {
  placesToStay: number;
}

function MainPage ({placesToStay}: MainPageProps) : JSX.Element {
  return (
    <div className="page page--gray page--main">

      <HeaderComponent/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => <SixCitiesListComponent city = {city} key = {city}/>)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesCounterComponent placesToStay = {placesToStay}/>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">

                  {PLACES_OPTIONS.map((option) => <PlacesOptionsComponent option = {option} key = {option} />)}
                </ul>
              </form>
              <CitiesPlacesListComponent>
                {Array.from({ length: PLACE_CARDS_COUNT }).map(() => (
                  <PlaceCardComponent key={crypto.randomUUID()} className='cities__card' />
                ))}
              </CitiesPlacesListComponent>
            </section>
            <MapComponent/>

          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

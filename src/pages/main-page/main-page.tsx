import PlaceCardComponent from '../../components/place-card-component/place-card-component';
import HeaderComponent from '../../components/header-component/header-component';
import MapComponent from '../../components/map-component/map-component';
import CitiesPlacesListComponent from '../../components/cities-places-list-component/cities-places-list-component';
import PlacesCounterComponent from '../../components/places-counter-component/places-counter-component';

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
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
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
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CitiesPlacesListComponent >
                <PlaceCardComponent className='cities__card'/>
                <PlaceCardComponent className='cities__card'/>
                <PlaceCardComponent className='cities__card'/>
                <PlaceCardComponent className='cities__card'/>
                <PlaceCardComponent className='cities__card'/>
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

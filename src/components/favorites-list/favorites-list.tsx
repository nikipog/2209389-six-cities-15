import type { ServerOffer } from '../../types/offer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import FavoritesItem from '../favorites-item/favorites-item';
import { AppRoute } from '../../const';
import { FavoritesEmpty } from '../favorites-empty/favorites-empty';

const FAVORITES_IS_EMPTY = 0;


export function FavoritesList({ offers }: { offers: ServerOffer[] }) {
  const cities: string[] = [];

  const offersByCity: Record<string, ServerOffer[]> = {};

  for (const offer of offers) {
    const city = offer.city.name;
    if (city in offersByCity) {
      offersByCity[city].push(offer);
      continue;
    }
    cities.push(city);
    offersByCity[city] = [offer];
    continue;
  }
  return (

    <main className={classNames('page__main page__main--favorites', { 'page__main--favorites-empty': offers.length === FAVORITES_IS_EMPTY })}>
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      {offers.length === FAVORITES_IS_EMPTY ? <FavoritesEmpty /> :
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li className="favorites__locations-items" key={city}>
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
                    {offersByCity[city].map((offer) => (
                      <FavoritesItem offer={offer} key={offer.id} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>}
    </main>
  );
}

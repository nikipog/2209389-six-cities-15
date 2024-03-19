import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offer';
import FavoritesList from '../../components/favorites-list/favorites-list';

type FavoritePageProps = {
  placesMock: TOffer[];
}

function FavoritesPage ({placesMock} : FavoritePageProps) : JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList
            placesMock = {placesMock} //1 - имя пропса в комопненте FavoritesList, 2 - передаваемое в него значение
          />

        </section>
      </div>
    </main>
  );

}

export default FavoritesPage;


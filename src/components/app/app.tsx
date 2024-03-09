import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FacilitiesInsidePlace from '../facilities-inside-place/facilities-inside-place';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppPageProps = {
  placesToStay: number;
}

function App({placesToStay}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placesToStay = {placesToStay}/>}
        />
        <Route
        path={AppRoute.Login}
        element={<LoginPage/>}
        />
        <Route
        path={AppRoute.Favorites}
        element={<FavoritesPage/>}
        />
        <Route
        path={AppRoute.Offer}
        element={<OfferPage/>}
        />
        <Route
        path='*'
        element={<NotFoundPage/>}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;

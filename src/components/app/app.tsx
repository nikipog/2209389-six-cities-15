import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
//импорты из библиотек желательно расположить в самом начале

type AppPageProps = {
  placesToStay: number;
}

function App({placesToStay}: AppPageProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Layout/>}
        >
          <Route
            index
            element={<MainPage placesToStay = {placesToStay}/>}
          />
          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <LoginPage/>
              </PrivateRoute>
            )}

          />
          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage/>
              </PrivateRoute>
            )}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage/>}
          />
          <Route
            path='*'
            element={<NotFoundPage/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

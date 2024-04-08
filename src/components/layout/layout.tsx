import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAuth } from '../../hooks/user-authorization';
import { getLayoutState } from './utils';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import { userActions, userSelector } from '../../store/slices/user';
import { useFavoriteCount } from '../../hooks/use-favorite-count';


export default function Layout () {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter} = getLayoutState (pathname as AppRoute);
  const authorizationStatus = useAuth();

  const user = useAppSelector(userSelector.userInfo);
  const {logout} = useActionCreators(userActions);
  const favoriteCount = useFavoriteCount();
  return (
    <div className={`page${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={`header__logo-link ${linkClassName}`}
                to={AppRoute.Main}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {
              shouldRenderUser ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoute.Favorites}
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        {
                          authorizationStatus ? (
                            <>
                              <span className="header__user-name user__name">{user?.email}</span>
                              <span className="header__favorite-count">{favoriteCount}</span>
                            </>
                          ) : <span className="header__login">Sign in</span>
                        }
                      </Link>
                    </li>
                    {
                      authorizationStatus ? (
                        <li className="header__nav-item">
                          <Link
                            className="header__nav-link"
                            onClick={() => {
                              logout();
                            }}
                            to='#'
                          >
                            <span className="header__signout">Sign out</span>
                          </Link>
                        </li>
                      ) : null
                    }
                  </ul>
                </nav>
              ) : null
            }
          </div>
        </div>
      </header>
      <Outlet/>
      {
        shouldRenderFooter ? (
          <footer className="footer">
            <Link
              className="footer__logo-link"
              to={AppRoute.Main}
            >
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
            </Link>
          </footer>
        ) : null
      }

    </div>
  );
}

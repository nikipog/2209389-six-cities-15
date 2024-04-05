import type { ReactNode } from 'react';
import type { Location } from 'react-router-dom';

import { Navigate, useLocation } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { userSelector } from '../../store/slices/user';

type TProtectedRouteProps = {
  children: ReactNode;
  onlyAuth?: boolean;
}

type FromState = {
  from?: Location;
};

export default function ProtectedRoute({ children, onlyAuth }: TProtectedRouteProps) {

  // используем location чтобы парсить URL
  const location: Location<FromState> = useLocation() as Location<FromState>;

  //достаем юзера из стора
  const user = useAppSelector(userSelector.userInfo);

  //если мы на странице авторизации и есть пользователь
  //надо переадресовать либо на страницу с которой нас редиректнуло, либо на главную
  //когда пользватель есть и случайно попали на страницу ЛОГИНА
  if (onlyAuth && user) {
    // если есть страница авторизации и логина
    const from = location.state?.from || { pathname: AppRoute.Main};
    return <Navigate to={from} />;
  }
  // если нет авторизации и не страница логина
  if (!onlyAuth && !user) {
    //переадресуем на страницу логина, но запоминаем ту, на которой находились
    return <Navigate state={{ from: location}} to={AppRoute.Login} />;
  }
  return children; // все ок, рендерим компонент

}

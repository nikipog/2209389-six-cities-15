import { useEffect } from 'react';

import { RequestStatus } from '../const';
import { favoritesActions, favoritesSelector } from '../store/slices/favorites';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../types/store';
import { useAppSelector } from './store';


function useFavoriteCount () {
  const dispatch = useDispatch<AppDispatch>();
  const status = useAppSelector(favoritesSelector.favoriteStatus);
  const count = useAppSelector(favoritesSelector.favorites).length;

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      dispatch(favoritesActions.fetchFavorites());
    }
  }, [status, dispatch]);

  return count;
}

export { useFavoriteCount };


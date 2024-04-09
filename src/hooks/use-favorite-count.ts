import { useEffect } from 'react';

import { RequestStatus } from '../const';
import { favoritesActions, favoritesSelector } from '../store/slices/favorites';
import { useActionCreators, useAppSelector } from './store';

function useFavoriteCount () {
  const status = useAppSelector(favoritesSelector.favoriteStatus);
  const count = useAppSelector(favoritesSelector.favorites).length;
  const { fetchFavorites } = useActionCreators(favoritesActions);

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      fetchFavorites();
    }
  }, [status, fetchFavorites]);

  return count;
}

export { useFavoriteCount };


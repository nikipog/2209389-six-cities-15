import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { useAppSelector } from '../../hooks/store';
import { favoritesSelector } from '../../store/slices/favorites';


export default function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(favoritesSelector.favorites);

  return (
    <FavoritesList offers={favorites} />
  );
}


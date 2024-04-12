import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { favoritesActions } from '../../store/slices/favorites';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/user-authorization';
import { AppRoute } from '../../const';
import { toast } from 'react-toastify';
import type { AppDispatch } from '../../types/store';
import { useAppSelector } from '../../hooks/store';


interface FavoriteButtonProps {
  bemBlock?: 'offer' | 'place-card';
  offerId: string;
  width?: number;
}

const enum Default {
  HeightCoefficient = 18 / 17
}
const TOASTIFY_ERROR_MESSAGE = 'Не удалось выполнить действие. Попробуйте перезагрузить страницу';

export function FavoriteButton({ bemBlock = 'place-card', offerId, width = 18, }: FavoriteButtonProps) {
  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = useAppSelector((state) =>
    state.favorites.items.some((offer) => offer.id === offerId && offer.isFavorite));
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    {
      [`${buttonClass}--active`]: isFavorite
    },
    'button'
  );
  const height = Math.round(width * Default.HeightCoefficient);
  const authorizationStatus = useAuth();
  const navigate = useNavigate();


  function handleClick() {
    // Обертываем вызов асинхронной функции в синхронную
    (async () => {
      try {
        if (!authorizationStatus) {
          navigate(AppRoute.Login);
          return;
        }
        await dispatch(favoritesActions.changeFavorite({
          offerId,
          status: Number(!isFavorite)
        })).unwrap();
        dispatch(favoritesActions.fetchFavorites());
      } catch (error) {
        toast.error(TOASTIFY_ERROR_MESSAGE);
      }
    })();
  }

  return (
    <button className={favoriteClass} onClick={handleClick} type="button">
      <svg className={`${bemBlock}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

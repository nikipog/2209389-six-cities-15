import { MouseEvent } from 'react';
import { TOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { useActionCreators } from '../../hooks/store';
import { offersActions } from '../../store/slices/offers';

type CitiesPlacesListProps = {
  currentOffers: TOffer[];
  className: string;
}

function CitiesPlacesList ({currentOffers, className} : CitiesPlacesListProps) : JSX.Element {

  const { setActiveId } = useActionCreators(offersActions);


  const handleMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget as HTMLElement;
    const id = target.dataset.id;
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(undefined);
  };

  return (
    <div className={className}>
      {
        currentOffers.map((offer) => (
          <PlaceCard
            key={offer.id}
            place={offer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />)
        )
      }
    </div>
  );
}

export default CitiesPlacesList;

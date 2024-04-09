import { MouseEvent } from 'react';
import { ServerOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type CitiesPlacesListProps = {
  currentOffers: ServerOffer[];
  className: string;
  setHoveredOfferId?: (id: string | undefined) => void;
}

function CitiesPlacesList ({currentOffers, className, setHoveredOfferId} : CitiesPlacesListProps) : JSX.Element {


  const handleMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget as HTMLElement;
    const id = target.dataset.id;
    if (setHoveredOfferId){
      setHoveredOfferId(id);
    }
  };

  const handleMouseLeave = () => {
    if (setHoveredOfferId) {
      setHoveredOfferId(undefined);
    }
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

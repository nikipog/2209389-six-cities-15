import { useState, useEffect } from 'react';
import { TOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { Nullable } from 'vitest';

type CitiesPlacesListProps = {
  placesMock: TOffer[];
  className: string;
}

function CitiesPlacesList ({placesMock, className} : CitiesPlacesListProps) : JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable <TOffer>>(null);
  const handleHover = (offer? : TOffer) => {
    setActiveOffer(offer || null);
  };
  useEffect(() => {
  }, [activeOffer]);
  return (
    <div className={className}>
      {
        placesMock.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            handleHover={handleHover}
          />)
        )
      }
    </div>
  );
}

export default CitiesPlacesList;

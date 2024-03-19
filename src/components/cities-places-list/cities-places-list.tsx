import { useState, useEffect } from 'react';
import { TOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { Nullable } from 'vitest';

type CitiesPlacesListProps = {
  placesMock: TOffer[];
}

function CitiesPlacesList ({placesMock} : CitiesPlacesListProps) : JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable <TOffer>>(null);
  const handleHover = (offer? : TOffer) => {
    setActiveOffer(offer || null);
  };
  useEffect(() => {
  }, [activeOffer]);
  return (
    <div className="cities__places-list places__list tabs__content">
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

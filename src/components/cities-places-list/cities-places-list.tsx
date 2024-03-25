import { useEffect } from 'react';
import { TOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';


type CitiesPlacesListProps = {
  placesMock: TOffer[];
  className: string;
  onHoverOffer: (offer?: TOffer) => void;
}

function CitiesPlacesList ({placesMock, className, onHoverOffer} : CitiesPlacesListProps) : JSX.Element {

  const handleHover = (offer? : TOffer) => {
    onHoverOffer(offer);
  };
  useEffect(() => {
  }, []);
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

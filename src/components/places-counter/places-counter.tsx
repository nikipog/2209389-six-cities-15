import { CityName } from '../../const';
import { ServerOffer } from '../../types/offer';

type PlacesCounterComponentProps = {
  placesToStay: ServerOffer[];
  currentCity: CityName;
}

function PlacesCounter ({placesToStay, currentCity}: PlacesCounterComponentProps) : JSX.Element {
  return (
    <b className="places__found">{placesToStay.length} place{placesToStay.length > 1 && 's'} to stay in {currentCity}</b>
  );
}

export default PlacesCounter;

import { FACILITIES_INSIDE_PLACE } from '../../const';

function FacilitiesInsidePlace () : JSX.Element {
  const listFacilities = FACILITIES_INSIDE_PLACE.map((convenience) =>
    <li className="offer__inside-item" key={crypto.randomUUID()}>{convenience }</li>);
  return <ul className="offer__inside-list">{listFacilities}</ul>;
}

export default FacilitiesInsidePlace;

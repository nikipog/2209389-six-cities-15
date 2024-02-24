type PlacesCounterComponentProps = {
  placesToStay: number;
}

function PlacesCounterComponent ({placesToStay}: PlacesCounterComponentProps) : JSX.Element {
  return (
    <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
  );
}

export default PlacesCounterComponent;

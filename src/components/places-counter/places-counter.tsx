type PlacesCounterComponentProps = {
  placesToStay: number;
}

function PlacesCounter ({placesToStay}: PlacesCounterComponentProps) : JSX.Element {
  return (
    <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
  );
}

export default PlacesCounter;

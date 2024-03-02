function PlacesOptions ({option, isActive} : {option : string; isActive? : boolean}) : JSX.Element {
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}>{option}</li>
  );
}

export default PlacesOptions;

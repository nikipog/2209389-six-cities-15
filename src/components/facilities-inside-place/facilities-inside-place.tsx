type goodsProps = {
  goods: string[];
}
function FacilitiesInsidePlace ({goods} : goodsProps) : JSX.Element {
  const listFacilities = goods.map((convenience) =>
    <li className="offer__inside-item" key={crypto.randomUUID()}>{convenience }</li>);
  return <ul className="offer__inside-list">{listFacilities}</ul>;
}

export default FacilitiesInsidePlace;

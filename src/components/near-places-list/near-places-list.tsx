import { ReactNode } from 'react';

function NearPlacesList ({children} : {children : ReactNode}) : JSX.Element {
  return (
    <div className="near-places__list places__list">
      {children}
    </div>
  );
}

export default NearPlacesList;

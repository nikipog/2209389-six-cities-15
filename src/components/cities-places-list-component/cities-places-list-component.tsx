import { ReactNode } from 'react';

function CitiesPlacesListComponent ({children} : {children : ReactNode}) : JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {children}
    </div>
  );
}

export default CitiesPlacesListComponent;

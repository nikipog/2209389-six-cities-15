import { ReactNode } from 'react';

function PlaceGalleryContainer({children} : {children : ReactNode}) : JSX.Element {
  return (
    <div className="offer__gallery">{children}</div>
  );
}

export default PlaceGalleryContainer;


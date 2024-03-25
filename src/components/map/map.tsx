import {useRef, useEffect} from 'react';
import leaflet, { Map as LeafletMap } from 'leaflet';
import useMap from '../../hooks/use-map';

import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import { TOffer, TCity } from '../../types/offer';


type MapProps = {
  className? : string;
  city: TCity;
  offers: TOffer[];
  activeOfferId?: string | null;
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({className, city, offers, activeOfferId}: MapProps): JSX.Element {

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map: LeafletMap | null = useMap({location: city.location, containerRef: mapContainerRef});

  useEffect(() : void => {
    if (map) {
      offers.forEach((offer) : void => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon,
          })
          .addTo(map);
      });
    }
  }, [activeOfferId, map, offers]);


  return (
    <section className={`${className} map`} ref={mapContainerRef}></section>

  );
}

export default Map;

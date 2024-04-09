import { Icon, Marker, layerGroup } from 'leaflet';
import { ServerOffer } from '../../types/offer';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { CITIES, CityName, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: CityName;
  offers: ServerOffer[];
  place?: 'cities' | 'offer';
  activeOfferId?: string;
  hoveredOfferId?: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({
  city,
  offers,
  place = 'cities',
  activeOfferId,
  hoveredOfferId
}: MapProps): JSX.Element {

  const mapRef = useRef(null);

  const location = CITIES.find((item) => item.name === city)!.location;

  const map = useMap({ mapRef, location });

  const layer = useRef(layerGroup());


  useEffect(() => {
    if (map) {
      layer.current.clearLayers();
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offer.id === activeOfferId || offer.id === hoveredOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(layer.current);
      });

      const currentLayer = layer.current;
      return () => {
        currentLayer.clearLayers();
      };
    }
  }, [map, offers, activeOfferId, hoveredOfferId]);

  useEffect(() => {
    if (map) {
      layer.current.addTo(map);
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [location, map]);


  return <section className={`${place}__map map`} ref={mapRef}></section>;
}

export default Map;

import 'leaflet/dist/leaflet.css';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { TLocationCoordinates } from '../types/offer';
import { MapSetting } from '../const';


type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  location: TLocationCoordinates;
};

function useMap({mapRef, location}: UseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(MapSetting.Layer, {
        attribution: MapSetting.Attribution,
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}

export default useMap;

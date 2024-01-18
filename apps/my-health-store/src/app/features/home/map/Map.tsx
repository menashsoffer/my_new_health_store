import React from 'react';
import { fromLonLat } from 'ol/proj';
import { Geometry, Point } from 'ol/geom';
import { Geolocation as OLGeoLoc } from 'ol';
import BaseEvent from 'ol/events/Event';
import 'ol/ol.css';

import {
  RMap,
  ROSM,
  RLayerVector,
  RFeature,
  RGeolocation,
  RStyle,
  useOL,
} from 'rlayers';
const locationIcon =
  'https://cdn.jsdelivr.net/npm/rlayers/examples/./svg/location.svg';

function GeolocComp(): JSX.Element {
  const [pos, setPos] = React.useState(
    new Point(fromLonLat([32.5556, 34.854])),
  );
  const [accuracy, setAccuracy] = React.useState(
    undefined as Geometry | undefined,
  );
  // Low-level access to the OpenLayers API
  const { map } = useOL();

  return (
    <>
      <RGeolocation
        tracking={true}
        trackingOptions={{ enableHighAccuracy: true }}
        onChange={React.useCallback(
          (e: BaseEvent) => {
            const geoloc = e.target as OLGeoLoc;
            const position = geoloc.getPosition();
            const accuracyGeometry = geoloc.getAccuracyGeometry();
            if (position) {
              setPos(new Point(position));
            }
            if (accuracyGeometry) {
              setAccuracy(accuracyGeometry);
            }
            if (accuracyGeometry) {
              map.getView().fit(accuracyGeometry, {
                duration: 250,
                maxZoom: 15,
              });
            }
          },
          [map],
        )}
      />
      <RLayerVector zIndex={10}>
        <RStyle.RStyle>
          <RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} />
        </RStyle.RStyle>
        <RFeature geometry={pos}></RFeature>
        <RFeature geometry={accuracy}></RFeature>
      </RLayerVector>
    </>
  );
}

const MyMap = () => {
  return (
    <RMap
      width={'full'}
      height={'600px'}
      className="example-map"
      initial={{ center: fromLonLat([32.5556, 34.854]), zoom: 4 }}
    >
      <ROSM />
      <GeolocComp />
    </RMap>
  );
};

export default MyMap;

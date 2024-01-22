import React from 'react';
import { fromLonLat, transform } from 'ol/proj';
import { Point, Geometry } from 'ol/geom';
import { Geolocation as OLGeoLoc } from 'ol';
import BaseEvent from 'ol/events/Event';
import 'ol/ol.css';

import { RLayerVector, RFeature, useOL, RGeolocation, RPopup } from 'rlayers';
import { RStyle, RIcon } from 'rlayers/style';

/* eslint-disable-next-line */
export interface GeolocCompProps {}

export function GeolocComp(props: GeolocCompProps) {
  const [pos, setPos] = React.useState(
    new Point(fromLonLat([32.5556, 34.854])),
  );
  const [accuracy, setAccuracy] = React.useState(
    undefined as Geometry | undefined,
  );
  const locationIcon =
    'https://cdn.jsdelivr.net/npm/rlayers/examples/./svg/location.svg';
  // Low-level access to the OpenLayers API
  const { map } = useOL();
  const popup = React.useRef<RPopup>(null);
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
        <RFeature geometry={new Point(fromLonLat([34.838, 32.10069]))}>
          <RStyle>
            <RIcon src={locationIcon} anchor={[0.5, 0.8]} />
          </RStyle>
          <RPopup ref={popup} trigger={'click'} className="example-overlay">
            <div className="card bg-indigo-500 rounded-2xl p-1">
              <p className="card-header">
                <strong>סניף בני ברק</strong>
              </p>
              <p className="card-body text-center">18:00 - 19:00</p>
            </div>
          </RPopup>
        </RFeature>
        <RStyle>
          <RIcon src={locationIcon} anchor={[0.5, 0.8]} />
        </RStyle>
        <RFeature geometry={pos}></RFeature>
        <RFeature geometry={accuracy}></RFeature>
      </RLayerVector>
    </>
  );
}

export default GeolocComp;

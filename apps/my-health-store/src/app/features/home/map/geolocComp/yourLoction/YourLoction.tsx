import { useCallback, useEffect, useRef, useState } from 'react';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { Geolocation as OLGeoLoc } from 'ol';
import BaseEvent from 'ol/events/Event';
import { RFeature, useOL, RGeolocation, RPopup, RLayerVector } from 'rlayers';
import { RStyle, RIcon } from 'rlayers/style';

const YourLoction = () => {
  const [pos, setPos] = useState(
    new Point(fromLonLat([34.832365318005635, 32.09619472090213])),
  );

  const { map } = useOL();
  const locationIcon =
    'https://cdn.jsdelivr.net/npm/rlayers/examples/./svg/location.svg';
  const popup = useRef<RPopup>(null);
  useEffect(() => {}, [pos]);

  return (
    <>
      <RGeolocation
        tracking={true}
        trackingOptions={{ enableHighAccuracy: true }}
        onChange={useCallback(
          (e: BaseEvent) => {
            const geoloc = e.target as OLGeoLoc;
            const position = geoloc.getPosition();
            if (position) {
              setPos(new Point(position));
            }
          },
          [map],
        )}
      />
      <RLayerVector>
        <RFeature geometry={pos}>
          <RStyle>
            <RIcon src={locationIcon} anchor={[0.5, 0.8]} />
          </RStyle>
          <RPopup ref={popup} trigger={'hover'}>
            <div className="card bg-indigo-500 rounded-2xl p-1">
              <p className="card-header">
                <strong>המיקום שלך</strong>
              </p>
            </div>
          </RPopup>
        </RFeature>
      </RLayerVector>
    </>
  );
};

export default YourLoction;

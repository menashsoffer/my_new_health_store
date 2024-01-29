import { LineString, Point } from 'ol/geom';
import { RLayerVector, RFeature, RGeolocation } from 'rlayers';
import { RStyle, RCircle, RFill, RStroke } from 'rlayers/style';
import { useOL } from 'rlayers';
import { useCallback, useState } from 'react';
import { Geolocation as OLGeoLoc } from 'ol';
import BaseEvent from 'ol/events/Event';

/* eslint-disable-next-line */
export interface LineCompProps {
  start: Point;
  finish: Point;
  route: LineString;
}

export function LineComp(props: LineCompProps) {
  const { map } = useOL();
  const [pos, setPos] = useState<Point>(props.start);

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
        <RStyle>
          <RCircle radius={6}>
            <RFill color="blue" />
          </RCircle>
        </RStyle>
        {/* <RFeature key={0} geometry={pos} /> */}
        <RFeature key={1} geometry={props.finish} />
        <RFeature key={2} geometry={props.route}>
          <RStyle>
            <RStroke width={3} color="darkgreen" />
          </RStyle>
        </RFeature>
      </RLayerVector>
    </>
  );
}

export default LineComp;

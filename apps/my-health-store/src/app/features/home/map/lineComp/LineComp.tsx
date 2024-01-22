import { LineString, Point } from 'ol/geom';
import { RLayerVector, RFeature } from 'rlayers';
import { RStyle, RCircle, RFill, RStroke } from 'rlayers/style';

/* eslint-disable-next-line */
export interface LineCompProps {
  start: Point;
  finish: Point;
  route: LineString;
}

export function LineComp(props: LineCompProps) {
  return (
    <RLayerVector>
      <RStyle>
        <RCircle radius={6}>
          <RFill color="blue" />
        </RCircle>
      </RStyle>
      <RFeature key={0} geometry={props.start} />
      <RFeature key={1} geometry={props.finish} />
      <RFeature key={2} geometry={props.route}>
        <RStyle>
          <RStroke width={3} color="darkgreen" />
        </RStyle>
      </RFeature>
    </RLayerVector>
  );
}

export default LineComp;

import { fromLonLat } from 'ol/proj';
import { LineString, Point } from 'ol/geom';
import { RGeolocation, RMap, ROSM, useOL } from 'rlayers';
import Footer from './footer/Footer';
import GeolocComp from './geolocComp/GeolocComp';
import { buildRoute } from './fn/buildRoute';
import { fillAddress } from './fn/fillAddress';
import LineComp from './lineComp/LineComp';
import 'ol/ol.css';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Geolocation as OLGeoLoc } from 'ol';
import BaseEvent from 'ol/events/Event';
import YourLoction from './geolocComp/yourLoction/YourLoction';

const Routing = () => {
  const [pos, setPos] = useState(
    new Point(fromLonLat([34.832365318005635, 32.09619472090213])),
  );

  const [finish, setFinish] = useState(null as unknown as Point);

  const [startAddress, setStartAddress] = useState('');
  const [finishAddress, setFinishAddress] = useState('');
  const [route, setRoute] = useState(null as unknown as LineString);
  const { map } = useOL();

  // On start change
  useEffect(() => {
    fillAddress(pos).then((address) => setStartAddress(address));
  }, [pos]);

  // On finish change
  useEffect(() => {
    fillAddress(finish).then((address) => setFinishAddress(address));
  }, [finish]);

  // When either one changes
  useEffect(() => {
    buildRoute(pos, finish).then((line) => setRoute(line));
  }, [pos, finish]);

  return (
    <Fragment>
      <RMap
        width={'full'}
        height={'600px'}
        initial={{
          center: fromLonLat([34.832365318005635, 32.09619472090213]),
          zoom: 12,
        }}
        onClick={(e) => {
          const coords = e.map.getCoordinateFromPixel(e.pixel);
          setFinish(new Point(coords));
        }}
      >
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
        <ROSM />
        <GeolocComp />
        <YourLoction />
        <LineComp start={pos} finish={finish} route={route} />
      </RMap>
      <Footer startAddress={startAddress} finishAddress={finishAddress} />
    </Fragment>
  );
};

export default Routing;

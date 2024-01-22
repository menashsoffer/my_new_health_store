import { fromLonLat } from 'ol/proj';
import { LineString, Point } from 'ol/geom';
import { RMap, ROSM } from 'rlayers';
import Footer from './footer/Footer';
import GeolocComp from './geolocComp/GeolocComp';
import { buildRoute } from './fn/buildRoute';
import { fillAddress } from './fn/fillAddress';
import LineComp from './lineComp/LineComp';
import 'ol/ol.css';
import { Fragment, useEffect, useState } from 'react';

const Routing = () => {
  const [start, setStart] = useState(null as unknown as Point);
  const [finish, setFinish] = useState(null as unknown as Point);
  enum Step {
    START = 0,
    FINISH = 1,
  }
  const [step, setStep] = useState(Step.START);
  const [startAddress, setStartAddress] = useState('');
  const [finishAddress, setFinishAddress] = useState('');
  const [route, setRoute] = useState(null as unknown as LineString);

  // On start change
  useEffect(() => {
    fillAddress(start).then((address) => setStartAddress(address));
  }, [start]);

  // On finish change
  useEffect(() => {
    fillAddress(finish).then((address) => setFinishAddress(address));
  }, [finish]);

  // When either one changes
  useEffect(() => {
    buildRoute(start, finish).then((line) => setRoute(line));
  }, [start, finish]);

  return (
    <Fragment>
      <RMap
        width={'full'}
        height={'600px'}
        className="example-map"
        initial={{
          center: fromLonLat([34.832365318005635, 32.09619472090213]),
          zoom: 15,
        }}
        onClick={(e) => {
          const coords = e.map.getCoordinateFromPixel(e.pixel);
          if (step === Step.START) {
            setFinish(null as unknown as Point);
            setStart(new Point(coords));
            setStep(Step.FINISH);
          } else {
            setFinish(new Point(coords));
            setStep(Step.START);
          }
        }}
      >
        <ROSM />
        <GeolocComp />
        <LineComp start={start} finish={finish} route={route} />
      </RMap>
      <Footer
        startAddress={startAddress}
        finishAddress={finishAddress}
        step={step}
      />
    </Fragment>
  );
};

export default Routing;

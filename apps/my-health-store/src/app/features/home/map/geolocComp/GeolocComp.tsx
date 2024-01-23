import { useRef } from 'react';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { RLayerVector, RFeature, RPopup } from 'rlayers';
import { RStyle, RIcon } from 'rlayers/style';
const stores = [
  { point: [34.838, 32.10069], name: 'a סניף בני ברק', hours: '18:00 - 19:00' },
  { point: [34.9, 32.1007], name: 'b סניף בני ברק', hours: '18:00 - 19:00' },
  { point: [34.85, 32.108], name: 'c סניף בני ברק', hours: '18:00 - 19:00' },
];

const GeolocComp = () => {
  const locationIcon =
    'https://cdn.jsdelivr.net/npm/rlayers/examples/./svg/location.svg';
  const popup = useRef<RPopup>(null);
  return (
    <>
      <RLayerVector zIndex={10}>
        {stores.map((store, i) => (
          <RFeature key={i} geometry={new Point(fromLonLat(store.point))}>
            <RStyle>
              <RIcon src={locationIcon} anchor={[0.5, 0.8]} />
            </RStyle>
            <RPopup ref={popup} trigger={'hover'} className="example-overlay">
              <div className="card bg-indigo-500 rounded-2xl p-1">
                <p className="card-header">
                  <strong>{store.name}</strong>
                </p>
                <p className="card-body text-center">{store.hours}</p>
              </div>
            </RPopup>
          </RFeature>
        ))}
      </RLayerVector>
    </>
  );
};

export default GeolocComp;

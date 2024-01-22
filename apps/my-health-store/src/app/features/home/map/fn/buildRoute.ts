import { transform } from 'ol/proj';
import { LineString, Point } from 'ol/geom';
import { Polyline } from 'ol/format';

const polyReader = new Polyline();
function parseRoute(routes: any): LineString {
  if (routes && routes.length > 0) {
    const f = polyReader.readFeature(routes[0].geometry);

    const geom = f.getGeometry();
    if (geom) {
      return geom.transform('EPSG:4326', 'EPSG:3857') as LineString;
    }
    return null as unknown as LineString;
  }
  return null as unknown as LineString;
}

export function buildRoute(start: Point, finish: Point): Promise<LineString> {
  if (start === null || finish === null)
    return Promise.resolve(null) as unknown as Promise<LineString>;
  const startCoords = transform(
    start.getCoordinates(),
    'EPSG:3857',
    'EPSG:4326',
  );
  const finishCoords = transform(
    finish.getCoordinates(),
    'EPSG:3857',
    'EPSG:4326',
  );

  const URL =
    'https://router.project-osrm.org/route/v1/driving/' +
    `${startCoords[0]},${startCoords[1]};${finishCoords[0]},${finishCoords[1]}`;
  return fetch(URL)
    .then((r) => r.json())
    .then((data) => parseRoute(data.routes));
}

import { transform } from 'ol/proj';
import { Point } from 'ol/geom';

export function fillAddress(point: Point): Promise<string> {
  if (point === null) return Promise.resolve('');
  const coordsWGS = transform(point.getCoordinates(), 'EPSG:3857', 'EPSG:4326');
  const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${coordsWGS[0]}&lat=${coordsWGS[1]}`;
  return fetch(URL)
    .then((r) => r.json())
    .then((data) => data.display_name)
    .catch((e) => e.message);
}

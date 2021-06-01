import mapboxgl from 'mapbox-gl';

export const createMap = container => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZWxlbmFjaCIsImEiOiJja29jdXV4ZHIxcTU2Mnlxa3l2enc0cTdhIn0.f4jSaqU4WJP6C9ILIK3rkQ';

  const map = new mapboxgl.Map({
    container: container,
    style: 'mapbox://styles/mapbox/basic-v9',
    center: [30.316275, 59.940571],
    zoom: 13,
    attributionControl: false,
  });

  return map;
}

const deleteLayer = ( LAYER_ID, map) => {
  if (map.getLayer(LAYER_ID)) {
    map.removeLayer(LAYER_ID);
  }
  if (map.getSource(LAYER_ID)) {
    map.removeSource(LAYER_ID);
  }
};

export const drawRoute = (map, coordinates) => {
  // const layerById = map.getStyle('route');
  // console.log('----l', layerById);
  const LAYER_ID = 'route';

  deleteLayer(LAYER_ID, map);
  
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  });
 
  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  });
};
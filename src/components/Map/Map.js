import React from 'react';
import mapboxgl from 'mapbox-gl';

// const createMap = container => {
//   mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmFjaCIsImEiOiJja29jdXV4ZHIxcTU2Mnlxa3l2enc0cTdhIn0.f4jSaqU4WJP6C9ILIK3rkQ';
//   const myMap = new mapboxgl.Map({
//     container: container,
//     style: 'mapbox://styles/mapbox/basic-v9',
//     center: [37.78, 56.51],
//     zoom: 11
//   });
//   return myMap;
// };

class Map extends React.Component{
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZWxlbmFjaCIsImEiOiJja29jdXV4ZHIxcTU2Mnlxa3l2enc0cTdhIn0.f4jSaqU4WJP6C9ILIK3rkQ';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/basic-v9',
      center: [56.25, 58.00],
      zoom: 13,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  };
}

export { Map };
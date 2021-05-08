import React from 'react';
import mapboxgl from 'mapbox-gl';

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
      attributionControl: false,
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
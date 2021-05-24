import React from 'react';
import {connect} from 'react-redux';
import * as mapApi from './api';

// const Map = () => {
  class MapComponent extends React.Component{
  // const [map, setMap] = useState(null);
  state = { map: null };
  mapContainer = React.createRef();

  componentDidMount() {
    const mapGL = mapApi.createMap(this.mapContainer.current);
    mapGL.on('load', () => {
      this.setState({ map: mapGL });
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.state.map && this.props.route) {
        mapApi.drawRoute(this.state.map, this.props.route);
      }
    }
  }

  componentWillUnmount() {
    this.setState({ map: null });
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  };

}

const mapStateToProps = ({ route }) => ({
  isLoaddingRoute: route.isLoaddingRoute,
  route: route.route,
});

export const Map = connect(mapStateToProps)(MapComponent);

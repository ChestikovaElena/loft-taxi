import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import * as mapApi from './api';

export class MapComponent extends React.Component{
  state = { map: null };
  mapContainer = React.createRef();

  componentDidMount() {
    const mapGL = mapApi.createMap(this.mapContainer.current);
    this.setState({ map: mapGL });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.state.map && this.props.route.length) {
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

MapComponent.propTypes = {
  route: PropTypes.array
}

const mapStateToProps = ({ route }) => ({
  route: route.route,
});

export const Map = connect(mapStateToProps)(MapComponent);

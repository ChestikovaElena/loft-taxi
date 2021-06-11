import React from 'react';
import Map from '../../components/Map';
import OrderFormWithConnect from '../../components/OrderForm';

export class MapPage extends React.Component {
  render() {
    return (
      <>
        <Map />
        <OrderFormWithConnect />
      </>
    )
  }
}

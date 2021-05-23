import React from 'react';
import Map from '../../components/Map';
import OrderForm from '../../components/OrderForm';

export class MapPage extends React.Component {
  render() {
    return (
      <>
        <Map />
        <OrderForm />
      </>
    )
  }
}

import React from 'react';
import ProfileForm from '../../components/ProfileForm';
import Map from '../../components/Map';

export class Profile extends React.Component {
  render() {
    return (
      <>
        <Map />
        <div className='overlay'>
          <ProfileForm />
        </div>
      </>
    )
  }
}

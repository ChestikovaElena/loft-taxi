import React from 'react';
import ProfileForm from '../../components/ProfileForm';
import ProfileWarning from '../../components/ProfileWarning';
import Header from '../../components/Header';
import Map from '../../components/Map';

export class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Map />
        <div className='overlay'>
          <ProfileForm />
        </div>
      </>
    )
  }
}

import React from 'react';
import ProfileForm from '../../components/ProfileForm';

export class Profile extends React.Component {
  render() {
    return (
      <div className='background'>
        <div className='overlay'>
          <ProfileForm />
        </div>
      </div>
    )
  }
}

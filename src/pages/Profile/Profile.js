import React from 'react';
import ProfileFormWithConnect from '../../components/ProfileForm';

export class Profile extends React.Component {
  render() {
    return (
      <div className='background'>
        <div className='overlay'>
          <ProfileFormWithConnect />
        </div>
      </div>
    )
  }
}

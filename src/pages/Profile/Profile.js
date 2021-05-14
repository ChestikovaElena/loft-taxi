import React from 'react';
import ProfileForm from '../../components/ProfileForm';
import ProfileWarning from '../../components/ProfileWarning';
import Map from '../../components/Map';

export class Profile extends React.Component {
  render() {
    return (
      <>
        <Map />
        <div className='overlay'>
          {/* <ProfileWarning navigateTo={this.props.navigateTo}/> */}
          <ProfileForm navigateTo={this.props.navigateTo}/>
        </div>
      </>
    )
  }
}

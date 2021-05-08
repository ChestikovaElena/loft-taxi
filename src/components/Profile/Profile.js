import React from 'react';
import { withAuth } from '../AuthContext/AuthContext';

export class Profile extends React.Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate('home');
  };

  render() {
    return (
      <div>
        <h2 className="page__title">Профиль</h2>
        <button onClick={this.unauthenticate}>Log out</button>
      </div>
    )
  }
}

export const ProfileWithAuth = withAuth(Profile);
import React from 'react';
import { withAuth } from '../AuthContext/AuthContext';

export class Profile extends React.Component {
  render() {
    return (
      <div>
        <h2 className="page__title">Профиль</h2>
      </div>
    )
  }
}

export const ProfileWithAuth = withAuth(Profile);
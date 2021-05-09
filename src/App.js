import React from 'react';
import HeaderWithAuth from './components/Header';
import Map from './components/Map';
import Profile from './components/Profile';
import Home from './components/Home';
import LoginFormWithAuth from './components/LoginForm';
import RegForm from './components/RegForm';
import {withAuth} from './components/AuthContext/AuthContext';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  };

  state = { page: 'loginPage' };

  navigateTo = (page) => {
    this.setState({ page });
  };

  render() {
    return (
      <main data-testid="container">
        {(this.props.isLoggedIn) ? 
          (<>
            <HeaderWithAuth navigateTo={this.navigateTo}/>
            {(this.state.page === 'map' || this.state.page === 'loginPage') && <Map navigateTo={this.navigateTo}/>}
            {this.state.page === 'profile' && <Profile navigateTo={this.navigateTo}/>}
          </>) : (<>
            <Home />
            {this.state.page === 'loginPage' && <LoginFormWithAuth navigateTo={this.navigateTo}/>}
            {this.state.page === 'regPage' && <RegForm navigateTo={this.navigateTo}/>}
          </>)
        }
      </main>
    );
  };
};

export default withAuth(App);
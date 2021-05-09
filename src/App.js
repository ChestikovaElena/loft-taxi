import React from 'react';
import HeaderWithAuth from './components/Header';
import Map from './components/Map';
import Profile from './components/Profile';
import Home from './pages/Home';
import withAuth from './components/AuthContext';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
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
            <Home navigateTo={this.navigateTo} page={this.state.page}/>
          </>)
        }
      </main>
    );
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
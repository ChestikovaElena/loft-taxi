import React from 'react';
import HeaderWithAuth from './components/Header';
import Map from './components/Map';
import Profile from './pages/Profile';
import Home from './pages/Home';
import withAuth from './components/AuthContext';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  state = { page: 'loginPage' };

  navigateTo = (page) => {
    this.setState({ page });
  };

  renderPage(){
    switch (this.state.page) {
      case "map":
      case "loginPage":
        return <Map navigateTo={this.navigateTo}/>;
      case "profile":
        return <Profile navigateTo={this.navigateTo}/>;
      default:
        return "";
    };
  };

  render() {
    return (
      <main data-testid="container">
        {(this.props.isLoggedIn) ? 
          (<>
            <HeaderWithAuth navigateTo={this.navigateTo}/>
            {this.renderPage()}
          </>) : (
            <Home navigateTo={this.navigateTo} page={this.state.page}/>
          )
        }
      </main>
    );
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
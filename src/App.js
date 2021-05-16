import React from 'react';
import HeaderWithAuth from './components/Header';
import Map from './components/Map';
import Profile from './pages/Profile';
import Home from './pages/Home';
import RegPage from './pages/RegPage';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main data-testid="container">
        <Switch>
          <PrivateRoute path="/map" component={Map} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
          <Route path="/regForm" component={RegPage} />
        </Switch>
      </main>
    );
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = ({auth}) => ({ isLoggedIn: auth.isLoggedIn, error: auth.error });
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);
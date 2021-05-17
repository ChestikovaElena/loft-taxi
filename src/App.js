import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import PropTypes from 'prop-types';

import HeaderWithConnect from './components/Header';
import Map from './components/Map';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main data-testid="container">
        {this.props.isLoggedIn && <HeaderWithConnect />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => this.props.isLoggedIn
              ? <Redirect to="/map" /> : <Home />}
          />
          <PrivateRoute path="/map" component={Map} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </main>
    );
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = ({auth}) => ({ isLoggedIn: auth.isLoggedIn, error: auth.error });

export default connect(mapStateToProps)(App);
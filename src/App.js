import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import PropTypes from 'prop-types';

import HeaderWithConnect from './components/Header';
import MapPage from './pages/MapPage';
import Profile from './pages/Profile';
import Home from './pages/Home';
import './App.css';

export class AppComponent extends React.Component {
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
          <PrivateRoute path="/map" component={MapPage} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </main>
    );
  };
};

AppComponent.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = ( {auth} ) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const App = connect(mapStateToProps)(AppComponent);
export default App;
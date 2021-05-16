import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn});

export const PrivateRoute = connect(mapStateToProps)(
  ({ component: Component, isLoggedIn,...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
));
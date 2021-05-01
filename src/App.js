import React, { useState } from 'react';
import { Header } from './components/Header';
import {Map} from './components/Map';
import {Profile} from './components/Profile';
import { Home } from './components/Home';
import { LoginForm } from './components/LoginForm';
import { RegForm } from './components/RegForm';
import './App.css';

const PAGES = {
  map: <Map/>,
  profile: <Profile/>,
  loginPage: <Home/>,
  regPage: <Home/>
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { page: 'loginPage' }
  }

  navigateTo = (page) => {
    this.setState({ page});
  }
  render() {
    return (
      <React.Fragment>
        <main>
          {PAGES[this.state.page]}
          {this.state.page === 'map' ? (<Header navigateTo={this.navigateTo}/>) : null}
          {this.state.page === 'profile' ? (<Header navigateTo={this.navigateTo}/>) : null}
          {this.state.page === 'loginPage' ? <LoginForm navigateTo={this.navigateTo}/> : null}
          {this.state.page === 'regPage' ? <RegForm navigateTo={this.navigateTo}/> : null}
        </main>
      </React.Fragment>
    )
  }
}

export default App;